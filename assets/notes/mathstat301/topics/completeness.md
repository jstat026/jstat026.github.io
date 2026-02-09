# Completeness

We say that a statistic $S$ is minimal sufficient if it is sufficient
and for every sufficient $T$, there is a measurable function $f$
such that $S=f(T)$. 

### Sub-family method

How do we find minimal sufficient statistic? The first method is called
the sub-family method. 

:::theorem
Suppose that $\Theta_{0}\subseteq\Theta$ and $S$ is minimal sufficient
for $(P_{\theta}:\theta\in\Theta_{0})$ and sufficient for $(P_{\theta}:\theta\in\Theta)$.
If the support of $P_{\theta}$ does not depend on $\theta$, then
$S$ is minimal sufficient for $(P_{\theta}:\theta\in\Theta)$.
:::

:::proof
Suppose that $T$ is sufficient for $(P_{\theta}:\theta\in\Theta)$.
Then $T$ is sufficient for $(P_{\theta}:\theta\in\Theta_{0})$, so
since $S$ is minimal sufficient for $(P_{\theta}:\theta\in\Theta_{0})$,
it follows that $S$ is a function of $T$.
:::

:::theorem
For a discrete or continuous statistical model $(P_{\theta}:\theta\in\{\theta_{0},\ldots,\theta_{d}\})$
with finite parameter space and common support, 

$$
T(X)=\left(\frac{p(X|\theta_{1})}{p(X|\theta_{0})},\frac{p(X|\theta_{2})}{p(X|\theta_{0})},\ldots,\frac{p(X|\theta_{d})}{p(X|\theta_{0})}\right)
$$

is a minimal sufficient statistic for $(P_{\theta}:\theta\in\{\theta_{0},\ldots,\theta_{d}\})$.
:::

:::proof
For $j=1,\ldots,d$, we have $p(x|\theta_{j})=T_{j}(x)p(x|\theta_{0})$,
so if we define

$$
g_{\theta_{j}}(T(x))=\begin{cases}
1 & \text{if }j=0,\\
T_{j}(x) & \text{if }j=1,\ldots,d,
\end{cases}\quad\text{and}\quad h(x)=p(x|\theta_{0}),
$$

we see that $T$ is sufficient by the factorization theorem. For any
sufficient $T'$, the factorization theorem implies the likelihood
ratio is a function of $T'$, so $T$ is a function of $T'$.
:::

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}P_{\theta}$ where
$P_{\theta}=\text{Bernoulli}(\theta)$ and $\theta\in(0,1)$. Consider
$\theta_{0}=0.3$ and $\theta_{1}=0.6$. Then

$$
\frac{p(X|\theta_{1})}{p(X|\theta_{0})}=\frac{\theta_{1}^{\sum_{i=1}^{n}X_{i}}(1-\theta_{1})^{n-\sum_{i=1}^{n}X_{i}}}{\theta_{0}^{\sum_{i=1}^{n}X_{i}}(1-\theta_{0})^{n-\sum_{i=1}^{n}X_{i}}}=\left(\frac{\theta_{1}(1-\theta_{0})}{\theta_{0}(1-\theta_{1})}\right)^{\sum_{i=1}^{n}X_{i}}\left(\frac{1-\theta_{1}}{1-\theta_{0}}\right)^{n}=2^{\sum_{i=1}^{n}X_{i}}\left(\frac{4}{7}\right)^{n}.
$$

This statistic is equivalent to $T(X)=\sum_{i=1}^{n}X_{i}$, so by
the previous theorem we see that $T(X)$ is minimal sufficient for
the sub-family $(P_{\theta}:\theta\in\{0.3,0.6\})$. We have seen
before that $T(X)$ is sufficient for $(P_{\theta}:\theta\in[0,1])$,
so the sub-family lemma yields that $T(X)$ is minimal sufficient
for $(P_{\theta}:\theta\in[0,1])$.
:::

:::theorem
If $(P_{\theta}:\theta\in H)$ is a minimal exponential family in
canonical form with

$$
p(x|\eta)=\exp\left(\eta^{T}T(x)-A(\eta)\right)h(x),\quad\eta\in H,
$$

then $T(X)$ is minimal sufficient.
:::

:::proof
Since the exponential family is minimal, we can find $\eta_{0},\ldots,\eta_{d}\in H$
such that

$$
\left(\begin{array}{c}
(\eta_{1}-\eta_{0})^{T}\\
(\eta_{2}-\eta_{1})^{T}\\
\vdots\\
(\eta_{d}-\eta_{0})^{T}
\end{array}\right)\in\mathbb{R}^{d\times d}
$$

has full rank. To see this, note that if the exponential family is
full rank, then $H$ is an open rectangle, so it immediately follows.
If the exponential family is curved, then this follows from the non-zero
curvature of the function which relates the components of $\eta$.
Then we know that

$$
\left(\frac{p(X|\eta_{1})}{p(X|\eta_{0})},\ldots,\frac{p(X|\eta_{d})}{p(X|\eta_{0})}\right)
$$

is minimal sufficient for the $(P_{\eta}:\eta\in\{\eta_{1},\ldots,\eta_{d}\})$.
Note that

$$
\frac{p(X|\eta_{j})}{p(X|\eta_{0})}=\frac{\exp\left(\langle\eta_{j},T(X)\rangle-A(\eta_{j})\right)}{\exp\left(\langle\eta_{0},T(X)\rangle-A(\eta_{0})\right)}=\exp\left(\left\langle \eta_{j}-\eta_{0},T(X)\right\rangle -A(\eta_{j})+A(\eta_{0})\right),
$$

which is equivalent to

$$
\left(\begin{array}{c}
\left\langle \eta_{1}-\eta_{0},T(x)\right\rangle \\
\left\langle \eta_{2}-\eta_{0},T(x)\right\rangle \\
\vdots\\
\left\langle \eta_{d}-\eta_{0},T(x)\right\rangle 
\end{array}\right)=\left(\begin{array}{c}
(\eta_{1}-\eta_{0})^{T}\\
(\eta_{2}-\eta_{0})^{T}\\
\vdots\\
(\eta_{d}-\eta_{0})^{T}
\end{array}\right)T(X),
$$

which is equivalent to $T(X)$. Since $T(X)$ is sufficient for the
whole family $(P_{\eta}:\eta\in H)$, it follows from the sub-family
lemma that $T(X)$ is minimal sufficient.
:::

One of the restrictions of the sub-family method is that the support
of all the distributions in the family must have the same support.
This is not an issue for exponential families as the support depends
only on the base measure $h(x)$, but it could be an issue for other
distributions like $P_{\theta}=\text{Unif}(0,\theta)$. 

### Completeness

The second method of finding minimal sufficient statistics is called
completeness. The idea is to remove ancillary information. For example,
if $X_{1}$ and $X_{2}$ are i.i.d. from $(N(\theta,1):\theta\in\mathbb{R})$,
then we know that $(X_{1},X_{2})$ is not a minimal sufficient statistic
because it is equivalent to $(X_{1}-X_{2},X_{1}+X_{2})$, and $X_{1}-X_{2}\sim N(0,2)$
carries no information about $\theta$. 

:::definition
We say that a statistic $A=A(X)$ is ancillary if its distribution
does not depend on $\theta$, and we say it is first-order ancillary
if $\mathbb{E}_{\theta}[A(X)]$ does not depend on $\theta$.
:::

:::definition
We say a statistic $T=T(X)$ is complete if $\mathbb{E}_{\theta}[f(T(X))]=0$
for all $\theta\in\Theta$ implies $\mathbb{P}_{\theta}[f(T(X))=0]=1$
for all $\theta\in\Theta$. In other words, every function of $T$
which is first-order ancillary must be constant almost surely.
:::

:::theorem Bahadur's theorem
If $T$ is sufficient and complete, then it is minimal
sufficient.
:::

:::proof
(Sketch only). Assume that a minimal sufficient statistic $U$
exists. By definition, we have $U=h(T)$ for some measurable function
$h$. We want to show that $T$ is also a function of $U$. Define
$g(u)=\mathbb{E}_{\theta}[T|U=u]$. Note that $g$ does not depend
on $\theta$ because $U$ is sufficient. Then $\mathbb{E}_{\theta}[g(h(T))]=\mathbb{E}_{\theta}[g(U)]=\mathbb{E}_{\theta}\left[\mathbb{E}_{\theta}\left[T|U\right]\right]=\mathbb{E}_{\theta}[T]$
, so $\mathbb{E}_{\theta}\left[g(h(T))-T\right]=0$ for all $\theta\in\Theta$.
By completeness of $T$, it follows that $g(U)=g(h(T))=T$ almost
surely for all $\theta\in\Theta$.
:::

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}\text{Bernoulli}(\theta)$
where $\theta\in(0,1)$. Let $T(X)=\sum_{i=1}^{n}X_{i}\sim\text{Binomial}(n,\theta)$.
Suppose $\mathbb{E}_{\theta}f(T(X))=0$ for all $\theta\in(0,1)$.
Then 

$$
\mathbb{E}_{\theta}[f(T(X))]=\sum_{i=1}^{n}f(i)\binom{n}{i}\theta^{i}(1-\theta)^{n-i}=(1-\theta)^{n}\sum_{i=1}^{n}f(i)\binom{n}{i}\left(\frac{\theta}{1-\theta}\right)^{i},
$$

so we have

$$
\sum_{i=1}^{n}f(i)\binom{n}{i}\left(\frac{\theta}{1-\theta}\right)^{i}=0\quad\text{for all }\theta\in(0,1).
$$

Set $\beta=\frac{\theta}{1-\theta}$. Then 

$$
\sum_{i=1}^{n}f(i)\binom{n}{i}\beta^{i}=0\quad\text{for all }\beta>0.
$$

This means that the polynomial $p(x)=\sum_{i=1}^{n}f(i)\binom{n}{i}x^{i}=0$
has infinitely many roots, which can only occur if all coefficients
vanish. Therefore, $f(i)=0$ for all $i=1,\ldots,n$. This shows that
$T$ is complete. We have seen before that $T(X)$ is sufficient,
so Bahadur's theorem implies it is also minimal sufficient.
:::

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}\text{Unif}(0,\theta)$
where $\theta>0$. Let $T(X)=X_{(n)}$. Suppose $\mathbb{E}_{\theta}f(T(X))=0$
for all $\theta>0$. Then 

$$
\begin{aligned}
\theta^{-n}n\int_{0}^{\theta}t^{n-1}f(t)\,dt=0\quad\text{for all }\theta>0 & .
\end{aligned}
$$

This implies that $G(\theta)=\int_{0}^{\theta}t^{n-1}f(t)\,dt=0$
for all $\theta>0$. Then by the Lebesgue differentiation theorem,
$G'(\theta)=\theta^{n-1}f(\theta)$ for almost every $\theta>0$.
Since $G=0$, we have $G'=0$, so $f=0$ almost everywhere on $(0,\infty)$.
This implies that $\mathbb{P}_{\theta}[f(T(X))=0]=1$ for all $\theta\in\Theta$.
:::

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}N(\theta,1)$ where
$\theta\in\mathbb{R}$. Let $T(X)=\frac{1}{\sqrt{n}}\sum_{i=1}^{n}X_{i}\sim N(\sqrt{n}\theta,1)=N(\beta,1)$,
where $\beta=\sqrt{n}\theta$. Note that

$$
\mathbb{E}_{\theta}[f(T(X))]=\int_{\mathbb{R}}f(x)e^{-\frac{1}{2}(x-\beta)^{2}}\,dx.
$$

Suppose $\mathbb{E}_{\theta}[f(T(X))]=0$ for all $\theta\in\mathbb{R}$,
so that $\int_{\mathbb{R}}f(x)e^{-\frac{1}{2}x^{2}+x\beta}\,dx=0$
for all $\beta\in\mathbb{R}$. Decomposing $f=f^{+}-f^{-}$, we have

$$
\int_{\mathbb{R}}f^{+}(x)e^{-\frac{1}{2}x^{2}+x\beta}\,dx=\int_{\mathbb{R}}f^{-}(x)e^{-\frac{1}{2}x^{2}+x\beta}\,dx\quad\text{for all }\beta\in\mathbb{R}.
$$

Then 

$$
\frac{\int_{\mathbb{R}}f^{+}(x)e^{-\frac{1}{2}x^{2}}e^{x\beta}\,dx}{\int_{\mathbb{R}}f^{+}(t)e^{-\frac{1}{2}t^{2}}\,dt}=\frac{\int_{\mathbb{R}}f^{-}(x)e^{-\frac{1}{2}x^{2}}e^{x\beta}\,dx}{\int_{\mathbb{R}}f^{-}(t)e^{-\frac{1}{2}t^{2}}\,dt}\quad\text{for all }\beta\in\mathbb{R}.
$$

This shows that the MGFs of the densities $\frac{f^{+}(x)e^{-\frac{1}{2}x^{2}}}{\int_{\mathbb{R}}f^{+}(t)e^{-\frac{1}{2}t^{2}}\,dt}$
and $\frac{f^{-}(x)e^{-\frac{1}{2}x^{2}}}{\int_{\mathbb{R}}f^{-}(t)e^{-\frac{1}{2}t^{2}}\,dt}$
coincide, so $f^{+}(x)e^{-\frac{1}{2}x^{2}}=f^{-}(x)e^{-\frac{1}{2}x^{2}}$
for all $x\in\mathbb{R}$ and we must have $f^{+}=f^{-}$, so $f=0$.
Thus, $T(X)$ is complete, which implies that $\overline{X}$ is sufficient
and complete and hence minimal sufficient.
:::

:::theorem
For full rank minimal exponential family $(P_{\eta}:\eta\in H)$,
$T$ is complete.
:::

:::theorem Basu's theorem
Let $T$ be complete and sufficient. If $A$ is ancillary,
then $T\ind A$.
:::

:::proof
Let $B$ be a measurable set. We want to show that $\mathbb{P}_{\theta}[A\in B|T]=\mathbb{P}_{\theta}[A\in B]$
almost surely for all $\theta\in\Theta$. Set $c=\mathbb{P}_{\theta}(A\in B)$,
which does not depend on $\theta$ since $A$ is ancillary. Also,
set $g(T)=\mathbb{P}_{\theta}(A\in B|T)$, which also does not depend
on $\theta$ since $T$ is sufficient. Then 

$$
\mathbb{E}_{\theta}[g(T)-c]=\mathbb{E}_{\theta}[\mathbb{P}_{\theta}[A\in B|T]]-\mathbb{P}_{\theta}[A\in B]=0\quad\text{for all }\theta\in\Theta,
$$

so by completeness we have $g(T)=c$ almost surely for all $\theta\in\Theta$.
:::

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}N(\theta,1)$. Then
$\overline{X}\ind\sum_{i=1}^{n}(X_{i}-\overline{X})^{2}$ by Basu's
theorem since $\sum_{i=1}^{n}(X_{i}-\overline{X})^{2}\sim\chi_{n-1}^{2}$
is ancillary.
:::
