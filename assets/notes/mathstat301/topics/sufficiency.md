# Sufficiency

A statistical model is a collection of probability distributions $(P_{\theta}:\theta\in\Theta)$.
Then data or observations are random variables $X_{1},\ldots,X_{n}\sim P_{\theta}$
for some $\theta\in\Theta$. A statistic is a function of the data,
$T=T(X_{1},\ldots,X_{n}).$ A statistic $T$ is sufficient if the
conditional distribution $X|T$ does not depend on $\theta$. 

:::example
If $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}N(\theta,1)$ , then
$T(X)=\overline{X}$ is sufficient. We can see this by finding the
conditional distribution

$$
\left(\begin{array}{c}
X_{1}\\
\vdots\\
X_{n}
\end{array}\right)|\overline{X}\sim N\left(\left(\begin{array}{c}
\overline{X}\\
\vdots\\
\overline{X}
\end{array}\right),I_{n}-\frac{1}{n}\mathbb{{1}}_{n}\mathbb{{1}}_{n}^{T}\right).
$$

To see this, introduce $P:=\frac{1}{n}\mathbb{{1}}_{n}\mathbb{{1}}_{n}^{T}$
and write $X=PX+(I_{n}-P)X$. Then $PX=\overline{X}\mathbb{{1}}_{n}$,
and $(I_{n}-P)X\sim N(0,I_{n}-P)$. Thus, $X|\overline{X}\sim N\left(\overline{X}\mathbb{{1}}_{n},I_{n}-P\right).$
:::

:::example
If $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}\text{Bernoulli}(\theta)$,
then $T(X)=\sum_{i=1}^{n}X_{i}$ is sufficient. This can be seen from

$$
\begin{aligned}
\mathbb{P}(X=x|T=t) & =\frac{\mathbb{P}(X=x,T=t)}{\mathbb{P}(T=t)}\\
 & =\frac{\mathbb{{1}}_{\{\sum_{i=1}^{n}x_{i}=t\}}\mathbb{P}(X=x)}{\mathbb{P}(T=t)}\\
 & =\frac{\mathbb{{1}}_{\{\sum_{i=1}^{n}x_{i}=t\}}\theta^{\sum_{i=1}^{n}x_{i}}(1-\theta)^{1-\sum_{i=1}^{n}x_{i}}}{\binom{n}{t}\theta^{t}(1-\theta)^{1-t}}\\
 & =\frac{\mathbb{{1}}_{\{\sum_{i=1}^{n}x_{i}=t\}}\theta^{t}(1-\theta)^{1-t}}{\binom{n}{t}\theta^{t}(1-\theta)^{1-t}}\\
 & =\frac{\mathbb{{1}}_{\{\sum_{i=1}^{n}x_{i}=t\}}}{\binom{n}{t}}.
\end{aligned}
$$

:::

:::example
If $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}P_{\theta}$, then
$T=(X_{(1)},\ldots,X_{(n)})$ is sufficient because $X|T=t$ is the
uniform distribution over all $n!$ permutations of the vector $t$.
:::

:::example
If $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}\text{Unif}(0,\theta)$,
then $T=X_{(n)}$ is sufficient. This can be seen from

$$
\begin{aligned}
f_{X|T}(x|t) & =\frac{f_{X,T}(x,t)}{f_{T}(t)}\\
 & =\frac{\mathbb{{1}}_{\{\max(x_{1},\ldots,x_{n})=t\}}f_{X}(x)}{f_{T}(t)}\\
 & =\frac{\mathbb{{1}}_{\{\max(x_{1},\ldots,x_{n})=t\}}\left(\frac{1}{\theta}\right)^{n}}{n\left(\frac{t}{\theta}\right)^{n-1}\frac{1}{\theta}}\\
 & =\frac{\mathbb{{1}}_{\{\max(x_{1},\ldots,x_{n})=t\}}}{nt^{n-1}},
\end{aligned}
$$

where $f_{T}(t)=n\left(\frac{t}{\theta}\right)^{n-1}\frac{1}{\theta}$
follows from differentiating 

$$
F_{T}(t)=\mathbb{P}(T\leq t)=\left(\frac{t}{\theta}\right)^{n}.
$$

:::

Shall we always use sufficient statistic and throw away the original
data? From the information-theoretic perspective, the answer is yes.
Indeed, if we can sample from $T$ and also from $X|(T=t)$ for an
arbitrary $t$, then we can sample from $X$. But from a computational
perspective, it is not always optimal because sampling from $X|T$
is often not easy or fast to do. In fact, it has been shown that sampling
$\widetilde{X}\sim X|T$ can be NP-hard. 

:::note
In a Bayesian setting where $\theta$ is random, another way to think
of sufficiency is that $\theta\to T\to X$ is a Markov chain.
:::

The following gives a characterization of sufficiency. 

:::theorem
Suppose that $(P_{\theta}:\theta\in\Theta)$ is continuous or discrete.
Then $T$ is sufficient if and only if $p(x|\theta)=g_{\theta}(T(x))h(x)$
for some measurable functions $g_{\theta}$ and $h$.
:::

:::proof
We will only prove this in the discrete case. Suppose that the pmf
can be factorized as $p(x|\theta)=g_{\theta}(T(x))h(x)$ for some
measurable functions $g_{\theta}$ and $h$. Then

$$
\begin{aligned}
\mathbb{P}(X=x,T=t) & =\mathbb{{1}}_{\{T(x)=t\}}\mathbb{P}(X=x)=\mathbb{{1}}_{\{T(x)=t\}}g_{\theta}(T(x))h(x)=\mathbb{{1}}_{\{T(x)=t\}}g_{\theta}(t)h(x),
\end{aligned}
$$

$$
\mathbb{P}(T=t)=\sum_{x':T(x')=t}\mathbb{P}(X=x')=\sum_{x':T(x')=t}g_{\theta}(T(x'))h(x')=g_{\theta}(t)\sum_{x':T(x')=t}h(x'),
$$

Therefore, 

$$
\mathbb{P}(X=x|T=t)=\frac{\mathbb{P}(X=x,T=t)}{\mathbb{P}(T=t)}=\frac{\mathbb{{1}}_{\{T(x)=t\}}h(x)}{\sum_{x':T(x')=t}h(x')}
$$

does not depend on $\theta$. Conversely, suppose that $T$ is sufficient.
Then

$$
\begin{aligned}
p(x|\theta) & =\mathbb{P}_{\theta}(X=x)\\
 & =\mathbb{P}_{\theta}(X=x,T(X)=T(x))\\
 & =\mathbb{P}(X=x|T(X)=T(x))\mathbb{P}_{\theta}(T(X)=T(x))\\
 & =h(x)g_{\theta}(T(x)),
\end{aligned}
$$

where $h(x)=\mathbb{P}(X=x|T(X)=T(x))$ and $g_{\theta}(T(x))=\mathbb{P}_{\theta}(T(X)=T(x))$.
:::

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}N(\theta,1).$ Then

$$
\begin{aligned}
p(x|\theta) & =\prod_{i=1}^{n}\frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}(x-\theta)^{2}}\\
 & =\left(\frac{1}{\sqrt{2\pi}}\right)^{n}e^{-\frac{1}{2}\sum_{i=1}^{n}(x_{i}-\theta)^{2}}\\
 & =\left(\frac{1}{\sqrt{2\pi}}\right)^{n}e^{-\frac{1}{2}\sum_{i=1}^{n}x_{i}^{2}-\frac{1}{2}n\theta^{2}+\theta\sum_{i=1}^{n}x_{i}}\\
 & =\left(\left(\frac{1}{\sqrt{2\pi}}\right)^{n}e^{-\frac{1}{2}\sum_{i=1}^{n}x_{i}^{2}}\right)e^{-\frac{1}{2}n\theta^{2}+\theta n\overline{x}}
\end{aligned}
$$

which shows that $T(X)=\overline{X}$ is sufficient.
:::

:::example
If $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}\text{Unif}(0,\theta)$,
then

$$
\begin{aligned}
p(x|\theta) & =\prod_{i=1}^{n}\left(\frac{1}{\theta}\mathbb{{1}}_{\{0<x_{i}<\theta\}}\right)=\theta^{-n}\mathbb{{1}}_{\{0<x_{(1)}\leq x_{(n)}<\theta\}}=\left(\mathbb{{1}}_{\{0<x_{(1)}\}}\right)\left(\theta^{-n}\mathbb{{1}}_{\{x_{(n)}<\theta\}}\right)
\end{aligned}
$$

which shows that $T(X)=X_{(n)}$ is sufficient.
:::

## Exponential Families

:::definition
We say that a continuous or discrete statistical model $(P_{\theta}:\theta\in\Theta)$
is an exponential family if

$$
p(x|\theta)=\exp\left(\sum_{j=1}^{d}\eta_{j}(\theta)T_{j}(x)-B(\theta)\right)h(x)
$$

where $\eta(\theta)$ is called the natural parameter, $T(x)=(T_{1}(x),\ldots,T_{d}(x))^{T}$
is the sufficient statistic, 

$$
B(\theta)=\log\int\exp\left(\sum_{j=1}^{d}\eta_{j}(\theta)T_{j}(x)\right)h(x)\,d\mu(x)
$$

is the log-partition function, and $h\geq0$ is the base measure.
:::

In the formula for $B(\theta)$ above, $\mu$ is either the Lebesgue
measure or the counting measure. Given observations $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}p(x|\theta)=e^{\sum_{j=1}^{d}\eta_{j}(\theta)T_{j}(x)-B(\theta)}h(x)$,
we have

$$
p(x_{1},\ldots,x_{n}|\theta)=\exp\left(\sum_{j=1}^{d}\eta_{j}(\theta)\left(\sum_{i=1}^{n}T_{j}(x_{i})\right)-nB(\theta)\right)\prod_{i=1}^{n}h(x_{i}),
$$

from which we see that the joint distribution also is an exponential
family with the same natural parameter and sufficient statistic $T'(x_{1},\ldots,x_{n})=\sum_{i=1}^{n}T(x_{i})$.
We say that an exponential family is in canonical form if it is parameterized
by $\eta\in H$. That is,

$$
p(x|\eta)=\exp\left(\sum_{j=1}^{d}\eta_{j}T_{j}(x)-A(\eta)\right)h(x).
$$

Any exponential family can be reparameterized into canonical form.
Here, 

$$
A(\eta)=\log\int\exp\left(\sum_{j=1}^{d}\eta_{j}T_{j}(x)\right)h(x)\,d\mu(x).
$$

:::definition
We say an exponential family $(P_{\eta}:\eta\in H)$ in canonical
form is minimal if the dimension $d$ cannot be reduced.
:::

:::example
The family $p(x|\theta)=\exp(\eta_{1}T(x)+\eta_{2}(3T(x)+2)-A(\eta))$
is non-minimal, since 

$$
\exp(\eta_{1}T(x)+\eta_{2}(3T(x)+2)-A(\eta))=\exp((\eta_{1}+3\eta_{2})T(x)+2\eta_{2}-A(\eta)).
$$

Similarly, the family $p(x|\theta)=\exp\left(\eta T_{1}(x)+(4-5\eta)T_{2}(x)-A(\eta)\right)$
is non-minimal, since

$$
\exp\left(\eta T_{1}(x)+(4-5\eta)T_{2}(x)-A(\eta)\right)=\exp\left(\eta(T_{1}(x)-5T_{2}(x))-A(\eta)\right)\exp\left(4T_{2}(x)\right).
$$

:::

Essentially, minimality fails if the components of the sufficient
statistic or the natural parameters are not linearly independent.
There are two types of minimal exponential families $(P_{\eta}:\eta\in H)$: 
- full rank exponential families, where $H$ contains an open $d$-dimensional
rectangle;
- curved exponential families, where $\eta_{1},\ldots,\eta_{d}$ are
related in a non-linear way. 

:::example
For $N(\mu,\sigma^{2})$, we have

$$
p(x|\mu,\sigma^{2})=\exp\left(-\frac{x^{2}}{2\sigma^{2}}+\frac{\mu}{\sigma^{2}}x-\frac{\mu^{2}}{2\sigma^{2}}-\frac{1}{2}\log(2\pi\sigma^{2})\right),
$$

so $T_{1}(x)=-x^{2}$, $T_{2}(x)=x$, $\eta_{1}=\frac{1}{2\sigma^{2}}$,
$\eta_{2}=\frac{\mu}{\sigma^{2}}$. Let's consider different special
cases. 
- If $\mu=\sigma^{2}$, then $\eta_{2}=1$, so this is a non-minimal
exponential family. 
- If $\mu=\sqrt{\sigma^{2}}$, then $\eta_{1}=\frac{1}{2\sigma^{2}}$
and $\eta_{2}=\frac{1}{\sqrt{\sigma^{2}}}$, so $\eta^{2}=2\eta_{1}$.
This is a minimal curved exponential family. 
- If $\mu$ and $\sigma^{2}$ do not have constraints, then this is
a full rank minimal exponential family. 

:::
