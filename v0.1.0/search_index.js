var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ZigZagBoomerang","category":"page"},{"location":"#ZigZagBoomerang","page":"Home","title":"ZigZagBoomerang","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ZigZagBoomerang]","category":"page"},{"location":"#ZigZagBoomerang.Boomerang","page":"Home","title":"ZigZagBoomerang.Boomerang","text":"Boomerang(λref) <: ContinuousDynamics\n\nDynamics preserving the standard Gaussian measure (Boomerang) with refreshment time λref\n\n\n\n\n\n","category":"type"},{"location":"#ZigZagBoomerang.ContinuousDynamics","page":"Home","title":"ZigZagBoomerang.ContinuousDynamics","text":"ContinuousDynamics\n\nAbstract type for the deterministic dynamics of PDMPs\n\n\n\n\n\n","category":"type"},{"location":"#ZigZagBoomerang.discretization-Tuple{Array{T,1} where T,Boomerang,Any}","page":"Home","title":"ZigZagBoomerang.discretization","text":"discretization(x::Vector{Skeleton}, Flow::Boomerang, dt)\n\nTansform the output of the algorithm (a skeleton of points) to a trajectory.\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.pdmp-Tuple{Any,Any,Any,Any,Any,ZigZagBoomerang.ContinuousDynamics}","page":"Home","title":"ZigZagBoomerang.pdmp","text":"pdmp(∇ϕ, x, θ, T, Flow::ContinuousDynamics; adapt=true,  factor=2.0)\n\nRun a piecewise deterministic process from location and velocity x, θ until time T. c is a tuning parameter for the upper bound of the Poisson rate. If adapt = false, c = c*factor is tried, otherwise an error is thrown.\n\nReturns vector of tuples (t, x, θ) (time, location, velocity) of direction change events.\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.poisson_time-Tuple{Any,Any,Any}","page":"Home","title":"ZigZagBoomerang.poisson_time","text":"poisson_time(a, b, u)\n\nobtaining waiting time for inhomogeneous Poisson Process with rate of the form λ(t) = (a + b*t)^+, a,b ∈ R, u uniform random variable\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.poisson_time-Tuple{Any,Any}","page":"Home","title":"ZigZagBoomerang.poisson_time","text":"h_poisson_time(a, u)\n\nobtaining waiting time for homogeneous Poisson Process with rate of the form λ(t) = a, a ≥ 0, u uniform random variable\n\n\n\n\n\n","category":"method"}]
}