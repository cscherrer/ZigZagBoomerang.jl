var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ZigZagBoomerang","category":"page"},{"location":"#ZigZagBoomerang","page":"Home","title":"ZigZagBoomerang","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Back to repository: [https://github.com/mschauer/ZigZagBoomerang.jl]","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ZigZagBoomerang]","category":"page"},{"location":"#ZigZagBoomerang.Boomerang","page":"Home","title":"ZigZagBoomerang.Boomerang","text":"Boomerang(μ, λ) <: ContinuousDynamics\n\nDynamics preserving the N(μ, 1) measure (Boomerang) with refreshment time λ\n\n\n\n\n\n","category":"type"},{"location":"#ZigZagBoomerang.Boomerang1d","page":"Home","title":"ZigZagBoomerang.Boomerang1d","text":"Boomerang1d(Σ, μ, λ) <: ContinuousDynamics\n\nDynamics preserving the N(μ, Σ) measure (Boomerang1d) with refreshment time λ\n\n\n\n\n\n","category":"type"},{"location":"#ZigZagBoomerang.Bps","page":"Home","title":"ZigZagBoomerang.Bps","text":"Bps{T} <: ContinuousDynamics\n\nλref::T : refreshment rate which has to be strictly positive Flag for the Bouncy particle sampler\n\n\n\n\n\n","category":"type"},{"location":"#ZigZagBoomerang.ContinuousDynamics","page":"Home","title":"ZigZagBoomerang.ContinuousDynamics","text":"ContinuousDynamics\n\nAbstract type for the deterministic dynamics of PDMPs\n\n\n\n\n\n","category":"type"},{"location":"#ZigZagBoomerang.FactBoomerang","page":"Home","title":"ZigZagBoomerang.FactBoomerang","text":"FactBoomerang(Γ, μ, λ) <: ContinuousDynamics\n\nFactorized Boomerang dynamics preserving the N(μ, inv(Diagonal(Γ))) measure with refreshment time λ. Exploits the conditional independence structure of the target measure, in form the argument Γ, a sparse precision matrix approximating target precision. μ is the approximate target mean.\n\n\n\n\n\n","category":"type"},{"location":"#ZigZagBoomerang.ZigZag","page":"Home","title":"ZigZagBoomerang.ZigZag","text":"struct ZigZag(Γ, μ) <: ContinuousDynamics\n\nType for local implementation of the ZigZag which exploits any conditional independence structure of the target measure, in form the argument Γ, a sparse precision matrix approximating target precision. μ is the approximate target mean.\n\n\n\n\n\n","category":"type"},{"location":"#ZigZagBoomerang.ab-Tuple{Any,Any,Any,Any,Any,ZigZag}","page":"Home","title":"ZigZagBoomerang.ab","text":"ab(G, i, x, θ, c, Flow)\n\nReturns the constant term a and linear term b when computing the Poisson times from the upper upper bounding rates λᵢ(t) = max(a + b*t)^2. The factors a and b can be function of the current position x, velocity θ, tuning parameter c and the Graph G\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.discretization-Tuple{Array{T,1} where T,Any,Any}","page":"Home","title":"ZigZagBoomerang.discretization","text":"discretization(x::Vector{Skeleton}, Flow::Boomerang, dt)\n\nTansform the output of the algorithm (a skeleton of points) to a trajectory.\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.idot-Tuple{Any,Any,Any}","page":"Home","title":"ZigZagBoomerang.idot","text":"idot(A, j, x) = dot(A[:, j], x)\n\nCompute exploiting sparsity.\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.move_forward!-Tuple{Any,Any,Any,Any,Union{ZigZagBoomerang.Boomerang, FactBoomerang}}","page":"Home","title":"ZigZagBoomerang.move_forward!","text":"move_forward!(τ, t, x, θ, B::Boomerang)\n\nUpdates the position x, velocity θ and time t of the process after a time step equal to τ according to the deterministic dynamics of the Boomerang sampler which are the Hamiltonian dynamics preserving the Gaussian measure: : xt = μ +(x0 − μ)cos(t) + v_0sin(t), vt = −(x0 − μ)sin(t) + v_0cos(t) x: current location, θ: current velocity, t: current time.\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.move_forward!-Tuple{Any,Any,Any,Any,Union{ZigZagBoomerang.Bps, ZigZag}}","page":"Home","title":"ZigZagBoomerang.move_forward!","text":"move_forward!(τ, t, x, θ, Z::Union{Bps, ZigZag})\n\nUpdates the position x, velocity θ and time t of the process after a time step equal to τ according to the deterministic dynamics of the Buoncy particle sampler (Bps) and ZigZag: (x(τ), θ(τ)) = (x(0) + θ(0)*t, θ(0)). x: current location, θ: current velocity, t: current time,\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.move_forward-Tuple{Any,Any,Any,Any,Boomerang1d}","page":"Home","title":"ZigZagBoomerang.move_forward","text":"move_forward(τ, t, x, θ, B::Boomerang1d)\n\nUpdates the position x, velocity θ and time t of the process after a time step equal to τ according to the deterministic dynamics of the Boomerang1d sampler: xt = μ +(x0 − μ)cos(t) + v_0sin(t), vt = −(x0 − μ)sin(t) + v_0cos(t) x: current location, θ: current velocity, t: current time.\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.move_forward-Tuple{Any,Any,Any,Any,ZigZag1d}","page":"Home","title":"ZigZagBoomerang.move_forward","text":"move_forward(τ, t, x, θ, ::ZigZag1d)\n\nUpdates the position x, velocity θ and time t of the process after a time step equal to τ according to the deterministic dynamics of the ZigZag1d sampler: (x(τ), θ(τ)) = (x(0) + θ(0)*t, θ(0)). x: current location, θ: current velocity, t: current time,\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.neighbours-Tuple{Array{#s16,1} where #s16<:Pair,Any}","page":"Home","title":"ZigZagBoomerang.neighbours","text":"neighbours(G::Vector{<:Pair}, i) = G[i].second\n\nReturn extended neighbourhood of i including i. G: graphs of neightbourhoods\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.pdmp-Tuple{Any,Any,Any,Any,Any,Any,Union{FactBoomerang, ZigZag},Vararg{Any,N} where N}","page":"Home","title":"ZigZagBoomerang.pdmp","text":"pdmp(∇ϕ, t0, x0, θ0, T, c, F::Union{ZigZag, FactBoomerang}, args...; factor=1.5, adapt=false) = Ξ, (t, x, θ), (acc, num)\n\nOuter loop of the factorised samplers: the Factorised Boomerang algorithm and the Zig-Zag sampler. Inputs: ith element of gradient of negative log density ∇ϕ(x, i, args...), starting time and position t0, x0, velocity θ0, and tuning vector c for rejection bounds and final clock T.\n\nThe process moves at to time T with invariant mesure μ(dx) ∝ exp(-ϕ(x))dx and outputs a collection of reflection points Ξ which, together with the initial triple x θ and t are sufficient for reconstructuing continuously the continuous path and returns a FactTrace object Ξ which can be collected into pairs t=>x of times and locations and discretized with discretize. Also returns the number of total and accepted Poisson events.\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.pdmp-Tuple{Any,Any,Any,Any,Any,ZigZagBoomerang.ContinuousDynamics}","page":"Home","title":"ZigZagBoomerang.pdmp","text":"pdmp(∇ϕ, x, θ, T, Flow::ContinuousDynamics; adapt=true,  factor=2.0)\n\nRun a piecewise deterministic process from location and velocity x, θ until time T. c is a tuning parameter for the upper bound of the Poisson rate. If adapt = false, c = c*factor is tried, otherwise an error is thrown.\n\nReturns vector of tuples (t, x, θ) (time, location, velocity) of direction change events.\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.pdmp_inner!-Tuple{Any,Any,Any,Any,Any,Any,Any,Any,Any,Union{FactBoomerang, ZigZag},Vararg{Any,N} where N}","page":"Home","title":"ZigZagBoomerang.pdmp_inner!","text":"pdmp_inner!(Ξ, G, ∇ϕ, x, θ, Q, t, c, (acc, num),\n    F::Union{ZigZag, FactBoomerang}; factor=1.5, adapt=false)\n\nInner loop of the factorised samplers: the Factorise Boomerand algorithm and the Zig-Zag sampler. Input: a dependency graph G, gradient ∇ϕ, current position x, velocity θ, Queue of events Q, time t, and tuning parameter c.\n\nThe sampler 1) extracts from the queue the first event time. 2) moves deterministically according to its dynamics until event time. 3) Evaluates whether the event time is a reflection time or not. 4) If it is a reflection time, the velocity reflects according its reflection rule and updates Q according to the dependency graph G. (num, acc) counts how many event times occour and how many of those are real reflection times.\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.poisson_time-Tuple{Any,Any,Any}","page":"Home","title":"ZigZagBoomerang.poisson_time","text":"poisson_time(a, b, u)\n\nObtaining waiting time for inhomogeneous Poisson Process with rate of the form λ(t) = (a + b*t)^+, a,b ∈ R, u uniform random variable\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.poisson_time-Tuple{Any,Any}","page":"Home","title":"ZigZagBoomerang.poisson_time","text":"poisson_time(a[, u])\n\nObtaining waiting time for homogeneous Poisson Process with rate of the form λ(t) = a, a ≥ 0, u uniform random variable\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.reflect!-Tuple{Any,Any,Any,Union{FactBoomerang, ZigZag}}","page":"Home","title":"ZigZagBoomerang.reflect!","text":"    reflect!(i, θ, x, Z)\n\nReflection rule of ZigZag sampler at reflection time. i: coordinate which flips sign, θ: velocity, x: position (not used for the ZigZag)\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.λ-Tuple{Any,Any,Any,Any,FactBoomerang,Vararg{Any,N} where N}","page":"Home","title":"ZigZagBoomerang.λ","text":"λ(∇ϕ, i, x, θ, Z::FactBoomerang)\n\nith Poisson rate of the FactBoomerang sampler\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.λ-Tuple{Any,Any,Any,Any,ZigZag,Vararg{Any,N} where N}","page":"Home","title":"ZigZagBoomerang.λ","text":"λ(∇ϕ, i, x, θ, Z::ZigZag)\n\nith Poisson rate of the ZigZag sampler\n\n\n\n\n\n","category":"method"},{"location":"#ZigZagBoomerang.λ_bar-Tuple{Any,Any,Any,Any,Any,ZigZag}","page":"Home","title":"ZigZagBoomerang.λ_bar","text":"λ_bar(G, i, x, θ, c, Z)\n\nComputes the bounding rate λ_bar at position x and velocity θ.\n\n\n\n\n\n","category":"method"},{"location":"#Literature","page":"Home","title":"Literature","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Joris Bierkens, Paul Fearnhead, Gareth Roberts: The Zig-Zag Process and Super-Efficient Sampling for Bayesian Analysis of Big Data. The Annals of Statistics, 2019, 47. Vol., Nr. 3, pp. 1288-1320. [https://arxiv.org/abs/1607.03188].\nJoris Bierkens, Sebastiano Grazzi, Kengo Kamatani and Gareth Robers: The Boomerang Sampler. ICML 2020. [https://arxiv.org/abs/2006.13777].\nJoris Bierkens, Sebastiano Grazzi, Frank van der Meulen, Moritz Schauer: A piecewise deterministic Monte Carlo method for diffusion bridges.  2020. [https://arxiv.org/abs/2001.05889].\nhttps://github.com/jbierkens/ICML-boomerang/","category":"page"}]
}
