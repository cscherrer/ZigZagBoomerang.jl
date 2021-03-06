using ZigZagBoomerang
using LinearAlgebra
using Random
using SparseArrays
using Test
using Profile
#using ProfileView
include("gridlaplace.jl")
sep(x) = first.(x), last.(x)

# Define precision operator of a Gaussian random field
n = 20
Γ = 0.01I + gridlaplacian(Float64, n, n)

# Γ is very sparse
@show nnz(Γ)/length(Γ) # 0.000496

# ∇ϕ gives the negative partial derivative of log density
∇ϕ(x, i, Γ) = ZigZagBoomerang.idot(Γ, i, x) # partial derivative of ϕ(x) with respect to x[i]

function ∇ϕ!(y, x, Γ)
    for i in eachindex(x)
        y[i] = ZigZagBoomerang.idot(Γ, i, x) # partial derivative of ϕ(x) with respect to x[i]
    end
    y
end
# Random initial values
t0 = 0.0
x0 = zeros(n*n)

# Rejection bounds
c = [norm(Γ[:, i], 2) for i in 1:n*n]

# Run sparse ZigZag and co. for T time units and collect trajectory
T = 2000.0
acc = zeros(Int, 4)
num = zeros(Int, 4)
#trace1, _, (acc[1], num[1]) = @time pdmp(∇ϕ, t0, x0, rand([-1.0,1.0], n*n), T, sqrt(eps())*ones(n*n), ZigZag(Γ, x0*0), Γ);
trace1, _, (acc[1], num[1]) = @time spdmp(∇ϕ, t0, x0, rand([-1.0,1.0], n*n), T, sqrt(eps())*ones(n*n), ZigZag(Γ, x0*0), Γ);
trace2, _, (acc[2], num[2]) = @time spdmp(∇ϕ, t0, x0, randn(n*n), T, c, FactBoomerang(I + eps()*Γ, x0*0, 1.0), Γ);
#trace2, _, (acc[2], num[2]) = @time spdmp(∇ϕ, t0, x0, sqrt(Diagonal(Γ))\randn(n*n), T, 1.01c, FactBoomerang(Γ, x0*0, 1.0), Γ);
#trace2, _, (acc[2], num[2]) = @time spdmp(∇ϕ, t0, x0, sqrt(Diagonal(0.5Γ))\randn(n*n), T, 2.01c, FactBoomerang(0.5Γ, x0*0, 0.1), Γ);
trace3, _, (acc[3], num[3]) = @time pdmp(∇ϕ!, t0, x0, randn(n*n), T, 6.0, Boomerang(Γ, x0*0, 0.1), Γ, adapt=false); # try opnorm(Matrix(Γ))
trace4, _, (acc[4], num[4]) = @time pdmp(∇ϕ!, t0, x0, rand([-1.0,1.0], n*n), T, sqrt(eps()), BouncyParticle(Γ, x0*0, 0.01), Γ);

for i in 1:4
    println("acc$i ", round(acc[i]/num[i], digits=3))
end
first2((t,x)) = t => x[1:2]
ts1, xs1 = sep((first2.(discretize(trace1, 0.05))))
ts2, xs2 = sep((first2.(discretize(trace2, 0.05))))
ts3, xs3 = sep((first2.(trace3)))
ts4, xs4 = sep((first2.(trace4)))

using Makie
limits = FRect(-5, -5, 10, 10)
p = Vector(undef, 4)
p[1] = title(lines(getindex.(xs1, 1), getindex.(xs1, 2), limits = limits, linewidth=0.6, color=(:black,0.3)), "ZigZag")
p[2] = title(lines(getindex.(xs2, 1), getindex.(xs2, 2), limits = limits, linewidth=0.6, color=(:black,0.3)), "FactBoomerang")
p[3] = lines(getindex.(xs3, 1), getindex.(xs3, 2), limits = limits, linewidth=0.6, color=(:black,0.3))
#p[3] = scatter!(p[3], getindex.(xs3, 1), getindex.(xs3, 2), markersize=0.04, color=(:black,0.3))
p[3] = title(p[3], "Boomerang")
p[4] = lines(getindex.(xs4, 1), getindex.(xs4, 2), limits = limits, linewidth=0.6, color=(:black,0.3))
#p[4] = scatter!(p[4], getindex.(xs4, 1), getindex.(xs4, 2), markersize=0.04, color=(:black,0.3))
p[4] = title(p[4], "BouncyParticle")

p2 = vbox(hbox(p[1], p[2]), hbox(p[3], p[4]))

save("figures/comparison.png", p2)
