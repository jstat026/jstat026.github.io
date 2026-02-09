# Bayes and Minimax Estimators

Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}P_{\theta}$, and
let $\widehat{\theta}=\widehat{\theta}(X_{1},\ldots,X_{n})$ be an
estimator of the parameter $\theta$. Let $L(\widehat{\theta},\theta)$
be a loss function which quantifies the accuracy of the estimator.
Then the risk function is

$$
R(\widehat{\theta},\theta)=\mathbb{E}_{\theta}[L(\widehat{\theta},\theta)]=\int L(\widehat{\theta}(x),\theta)p(x|\theta)\,dx
$$

:::theorem Rao-Blackwell theorem
Assume $L(\widehat{\theta},\theta)$ is convex in
$\widehat{\theta}$. For any $\widehat{\theta}$ and any sufficient
$T$, define $\widetilde{\theta}=\mathbb{E}_{\theta}(\widehat{\theta}|T)$.
Then $R(\widetilde{\theta},\theta)\leq R(\widehat{\theta},\theta).$
:::

:::proof
We have $L(\widetilde{\theta},\theta)=L(\mathbb{E}_{\theta}(\widehat{\theta}|T),\theta)\leq\mathbb{E}_{\theta}(L(\widehat{\theta},\theta)|T)$,
and taking expectation of both sides gives $R(\widetilde{\theta},\theta)\leq R(\widehat{\theta},\theta).$
:::

:::definition
Given an estimator $\widehat{\theta}$, we define the maximum risk
to be $\sup_{\theta\in\Theta}R(\widehat{\theta},\theta)$. We say
that $\widehat{\theta}$ is minimax if $\widehat{\theta}\in\argmin_{\widetilde{\theta}}\sup_{\theta\in\Theta}R(\widetilde{\theta},\theta)$
where the minimum is taken over all estimators. Given an estimator
$\widehat{\theta}$ and a prior distribution $\pi$ on $\Theta$,
we define the average risk with respect to $\pi$ to be $\int R(\widehat{\theta},\theta)\pi(\theta)\,d\theta$.
We say that $\widehat{\theta}$ is a Bayes estimator if $\widehat{\theta}\in\argmin_{\widetilde{\theta}}\int_{\Theta}R(\widetilde{\theta},\theta)\pi(\theta)\,d\theta$.
:::

### Finding Bayes estimators

:::theorem
The Bayes estimator is given by 

$$
\widehat{\theta}_{\pi}(X)=\argmin_{a}\int L(a,\theta)\pi(\theta|X)\,d\theta.
$$

:::

:::proof
Let $m(x)=\int p(x|\theta)\pi(\theta)\,d\theta$ be the marginal of
$X$. For any estimator $\widetilde{\theta}$, we have

$$
\begin{aligned}
\int R(\widehat{\theta}_{\pi},\theta)\pi(\theta)\,d\theta & =\int\int L(\widehat{\theta}_{\pi}(x),\theta)p(x|\theta)\pi(\theta)\,dx\,d\theta\\
 & =\int\int L(\widehat{\theta}_{\pi}(x),\theta)\pi(\theta|x)d\theta\,m(x)\,dx\\
 & \leq\int\int L(\widetilde{\theta}(x),\theta)\pi(\theta|x)d\theta\,m(x)\,dxx\\
 & =\int R(\widetilde{\theta},\theta)\pi(\theta)\,d\theta.
\end{aligned}
$$

:::

:::theorem
If $\Theta\subseteq\mathbb{R}$ and $L(\widehat{\theta},\theta)=(\widehat{\theta}-\theta)^{2}$.
Then 

$$
\widehat{\theta}_{\pi}(X)=\argmin_{a}\int(a-\theta)^{2}\pi(\theta|X)\,d\theta=\argmin_{a}\mathbb{E}[(a-\theta)^{2}|X]=\mathbb{E}[\theta|X].
$$

:::

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{i.i.d.}}{\sim}\text{Bernoulli}(\theta)$,
and let $L(\hat{\theta},\theta)=(\hat{\theta}-\theta)^{2}$. Consider
the prior $\pi\sim\text{Beta}(\alpha,\beta)$, so $\pi(\theta)\propto\theta^{\alpha-1}(1-\theta)^{\beta-1}$.
Then

$$
\pi(\theta|X)\propto\left(\prod_{i=1}^{n}\theta^{x_{i}}(1-\theta)^{1-x_{i}}\right)\pi(\theta)\propto\theta^{\alpha+\sum_{i=1}^{n}X_{i}-1}(1-\theta)^{n-\sum_{i=1}^{n}X_{i}+\beta-1}.
$$

This shows that the posterior distribution is $\theta|X_{1},\ldots,X_{n}\sim\text{Beta}\left(\sum_{i=1}^{n}X_{i}+\alpha,n-\sum_{i=1}^{n}X_{i}+\beta\right).$
The Bayes estimator is then

$$
\widehat{\theta}(X)=\mathbb{E}[\theta|X_{1},\ldots,X_{n}]=\frac{\sum_{i=1}^{n}X_{i}+\alpha}{n+\alpha+\beta}.
$$

:::

### Finding minimax estimators

:::theorem
If there exists a prior $\pi$ on $\Theta$ such that $\widehat{\theta}$
satisfies 

$$
\sup_{\theta\in\Theta}R(\widehat{\theta},\theta)=\inf_{\widetilde{\theta}}\int R(\widetilde{\theta},\theta)\pi(\theta)\,d\theta,
$$

then $\widehat{\theta}$ is minimax.
:::

:::proof
For all $\widetilde{\theta}$, we have

$$
\sup_{\theta\in\Theta}R(\widetilde{\theta},\theta)\geq\int R(\widetilde{\theta},\theta)\pi(\theta)\,d\theta\geq\inf_{\widetilde{\theta}}\int R(\widetilde{\theta},\theta)\pi(\theta)\,d\theta=\sup_{\theta\in\Theta}R(\widehat{\theta},\theta).
$$

:::

For a prior satisfying the above condition, we call it a least-favorable
prior. 

:::theorem
If $\widehat{\theta}$ is Bayes with respect to some prior $\pi$
and the risk $R(\widehat{\theta},\theta)$ is constant over $\theta\in\Theta$,
then $\widehat{\theta}$ is minimax.
:::

:::proof
We have $\sup_{\theta\in\Theta}R(\widehat{\theta},\theta)=\int R(\widehat{\theta},\theta)\pi(\theta)\,d\theta=\inf_{\widetilde{\theta}}\int R(\widetilde{\theta},\theta)\pi(\theta)\,d\theta$,
so by the theorem we have that $\widehat{\theta}$ is minimax.
:::

The above corollary is usually the first line of attack when finding
minimax estimators.

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}\text{Bernoulli}(\theta)$,
and let $L(\widehat{\theta},\theta)=(\hat{\theta}-\theta)^{2}$. Recall
that for the prior $\pi\sim\text{Beta}(\alpha,\beta)$ we have the
Bayes estimator

$$
\widehat{\theta}=\mathbb{E}[\theta|X_{1},\ldots,X_{n}]=\frac{\sum_{i=1}^{n}X_{i}+\alpha}{\alpha+\beta+n}=\frac{\alpha}{\alpha+\beta+n}+\frac{n}{\alpha+\beta+n}\overline{X}.
$$

The risk is 

$$
\begin{aligned}
R(\widehat{\theta},\theta) & =\mathbb{E}_{\theta}[(\widehat{\theta}-\theta)^{2}]\\
 & =\left(\mathbb{E}_{\theta}[\widehat{\theta}]-\theta\right)^{2}+\operatorname{Var}[\widehat{\theta}]\\
 & =\left(\frac{\alpha}{\alpha+\beta+n}+\frac{n}{\alpha+\beta+n}\theta-\theta\right)^{2}+\left(\frac{n}{\alpha+\beta+n}\right)^{2}\frac{\theta(1-\theta)}{n}\\
 & =\left(\frac{\alpha}{\alpha+\beta+n}-\frac{\alpha+\beta}{\alpha+\beta+n}\theta\right)^{2}+\frac{n}{(\alpha+\beta+n)^{2}}\theta(1-\theta)\\
 & =\left[\left(\frac{\alpha+\beta}{\alpha+\beta+n}\right)^{2}-\frac{n}{\alpha+\beta+n}\right]\theta^{2}+\left[\frac{n}{(\alpha+\beta+n)^{2}}-\frac{2\alpha(\alpha+\beta)}{\left(\alpha+\beta+n\right)^{2}}\right]\theta+\left(\frac{\alpha+\beta}{\alpha+\beta+n}\right)^{2}.
\end{aligned}
$$

If $\alpha=\beta=\frac{\sqrt{n}}{2}$, then the coefficients of the
$\theta$ and $\theta^{2}$ terms vanish, and the risk becomes $R(\widehat{\theta},\theta)=\frac{1}{4(\sqrt{n}+1)^{2}}$
which is constant with respect to $\theta$. Therefore, a minimax
estimator is

$$
\widehat{\theta}_{\text{minimax}}=\frac{\sum_{i=1}^{n}X_{i}+\frac{\sqrt{n}}{2}}{n+\sqrt{n}}.
$$

How does this estimator compare to the maximum likelihood estimator
$\widehat{\theta}_{\text{MLE}}=\overline{X}$? The risk function for
the MLE estimator is 

$$
R(\widehat{\theta}_{\text{MLE}},\theta)=\mathbb{E}_{\theta}[(\widehat{\theta}_{\text{MLE}}-\theta)^{2}]=\operatorname{Var}[\widehat{\theta}_{\text{MLE}}]=\frac{\theta(1-\theta)}{n}.
$$

There are some situations where the MLE has lower risk, for example
when $\theta$ is close to 0 or 1. However, if we consider the worst
case, we find that

$$
\sup_{\theta\in(0,1)}R(\widehat{\theta}_{\text{MLE}},\theta)=\frac{1}{4n}>\frac{1}{4(\sqrt{n}+1)^{2}}=\sup_{\theta\in(0,1)}R(\hat{\theta}_{\text{minimax}},\theta).
$$

:::

The choice of loss function is important. Let us demonstrate this
with another example. 

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}\text{Bernoulli}(\theta)$,
and let $L(\widehat{\theta},\theta)=\frac{(\widehat{\theta}-\theta)^{2}}{\theta(1-\theta)}$.
For the prior $\pi(\theta)=1$, the Bayes estimator is

$$
\begin{aligned}
\widehat{\theta}(X) & =\argmin_{a}\int\frac{(a-\theta)^{2}}{\theta(1-\theta)}\pi(\theta|X)\,d\theta=\argmin_{a}\int(a-\theta)^{2}\frac{\pi(\theta|X)}{\theta(1-\theta)}\,d\theta,
\end{aligned}
$$

where 

$$
\frac{\pi(\theta|X)}{\theta(1-\theta)}\propto\theta^{\sum_{i=1}^{n}X_{i}-1}(1-\theta)^{n-\sum_{i=1}^{n}X_{i}-1}=\text{Beta}\left(\sum_{i=1}^{n}X_{i},n-\sum_{i=1}^{n}X_{i}\right),
$$

so

$$
\widehat{\theta}(X)=\frac{\sum_{i=1}^{n}X_{i}}{\sum_{i=1}^{n}X_{i}+n-\sum_{i=1}^{n}X_{i}}=\overline{X}=\widehat{\theta}_{\text{MLE}}.
$$

The risk is $R(\widehat{\theta},\theta)=\frac{\mathbb{E}_{\theta}(\widehat{\theta}-\theta)^{2}}{\theta(1-\theta)}=\frac{1}{n}$
which is constant, so $\overline{X}$ is a Bayes estimator (which
cannot be the case with the squared loss function because with this
choice of loss only biased estimators could be Bayes), and it is also
a minimax estimator.
:::

Sometimes we may not be able to show that $\widehat{\theta}$ is a
Bayes estimator. In this case, we can find a sequence of Bayes estimators
whose Bayes risks approximate the maximum risk of $\widehat{\theta}$.

:::theorem
If there exists a sequence of priors $(\pi_{m})$ such that 

$$
\sup_{\theta\in\Theta}R(\widehat{\theta},\theta)=\lim_{m\to\infty}\inf_{\widetilde{\theta}}\int R(\widetilde{\theta},\theta)\pi_{m}(\theta)\,d\theta,
$$

then $\widehat{\theta}$ is minimax.
:::

:::proof
For all $\widetilde{\theta}$ and $m$, we have

$$
\sup_{\theta\in\Theta}R(\widetilde{\theta},\theta)\geq\int R(\widetilde{\theta},\theta)\pi_{m}(\theta)\,d\theta\geq\inf_{\widetilde{\theta}}\int R(\widetilde{\theta},\theta)\pi_{m}(\theta)\,d\theta.
$$

Taking the limit as $m\to\infty$ gives $\sup_{\theta\in\Theta}R(\widetilde{\theta},\theta)\geq\sup_{\theta\in\Theta}R(\widehat{\theta},\theta)$.
:::

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{i.i.d.}}{\sim}N(\theta,1)$
where $\theta\in\mathbb{R}$. Consider the loss function $L(\widehat{\theta},\theta)=(\widehat{\theta}-\theta)^{2}$.
We claim that the estimator $\overline{X}$ is minimax. This is true
intuitively because the risk $R(\overline{X},\mu)=\mathbb{E}_{\theta}[(\overline{X}-\theta)^{2}]=\frac{1}{n}$
is constant. To prove this formally, consider the prior $\pi\sim N(0,\tau^{2})$.
Then

$$
\pi(\theta|X_{1},\ldots,X_{n})\propto\exp\left(-\frac{1}{2}\sum_{i=1}^{n}(X_{i}-\theta)^{2}-\frac{\theta^{2}}{2\tau^{2}}\right).
$$

This is a normal distribution, so the posterior mean is equal to the
posterior mode. Let $f(\theta):=\frac{1}{2}\sum_{i=1}^{n}(X_{i}-\theta)^{2}+\frac{\theta^{2}}{2\tau^{2}}$.
Then $f'(\theta)=\sum_{i=1}^{n}(\theta-X_{i})+\frac{\theta}{\tau^{2}}$,
and setting this to 0 gives the Bayes estimator

$$
\widehat{\theta}_{\tau^{2}}=\frac{n}{n+\tau^{-2}}\overline{X}.
$$

The risk is

$$
\begin{aligned}
R(\hat{\theta}_{\tau^{2}},\theta) & =\mathbb{E}[(\hat{\theta}_{\tau^{2}}-\theta)^{2}]\\
 & =\left(\frac{n}{n+\tau^{-2}}\theta-\theta\right)^{2}+\left(\frac{n}{n+\tau^{-2}}\right)^{2}\frac{1}{n}\\
 & =\left(\frac{\tau^{2}}{n+\tau^{-2}}\right)^{2}\theta^{2}+\left(\frac{n}{n+\tau^{-2}}\right)^{2}\frac{1}{n}.
\end{aligned}
$$

The average risk is

$$
\int R(\hat{\theta}_{\tau^{2}},\theta)\pi_{\tau^{2}}(\theta)\,d\theta=\left(\frac{\tau^{-2}}{n+\tau^{-2}}\right)^{2}\tau^{2}+\left(\frac{n}{n+\tau^{-2}}\right)^{2}\frac{1}{n}=\frac{1}{n+\tau^{-2}}.
$$

Thus, we have

$$
\sup_{\theta\in\mathbb{R}}R(\overline{X},\theta)=\lim_{\tau\to\infty}\int R(\hat{\theta}_{\tau^{2}},\theta)\pi_{\tau^{2}}(\theta)\,d\theta
$$

which shows that $\overline{X}$ is minimax.
:::

## Admissibility

An estimator $\widehat{\theta}$ is inadmissible if there exists another
estimator $\widetilde{\theta}$ such that 
- $R(\widetilde{\theta},\theta)\leq R(\widehat{\theta},\theta)$ for
all $\theta\in\Theta$, and
- $R(\widetilde{\theta},\theta_{0})<R(\widehat{\theta},\theta_{0})$
for some $\theta_{0}\in\Theta$.

Then we say $\widehat{\theta}$ is admissible if it is not inadmissible.
Inadmissible estimators are those that are essentially useless. There
are always other choices that are strictly better. 

:::theorem
Assume that the loss function is continuous. If $\widehat{\theta}$
is Bayes with respect to a prior $\pi$ whose support is the entire
parameter space $\Theta$, then it is admissible.
:::

:::proof
Suppose that $\widehat{\theta}$ is inadmissible. Then there exists
$\widetilde{\theta}$ such that $R(\widetilde{\theta},\theta)\leq R(\widehat{\theta},\theta)$
for all $\theta\in\Theta$, and $R(\widetilde{\theta},\theta_{0})<R(\widehat{\theta},\theta_{0})$
for some $\theta_{0}\in\Theta$. Then there exists an open set $\Theta_{0}\ni\theta_{0}$
and $\epsilon>0$ such that $R(\widetilde{\theta},\theta)<R(\widehat{\theta},\theta)-\varepsilon$
for all $\theta\in\Theta_{0}$. Then

$$
\begin{aligned}
\int_{\Theta}R(\widetilde{\theta},\theta)\pi(\theta)\,d\theta & =\int_{\Theta_{0}}R(\widetilde{\theta},\theta)\pi(\theta)\,d\theta+\int_{\Theta\backslash\Theta_{0}}R(\widetilde{\theta},\theta)\pi(\theta)\,d\theta\\
 & \leq\int_{\Theta_{0}}R(\widehat{\theta},\theta)\pi(\theta)\,d\theta+\int_{\Theta\backslash\Theta_{0}}R(\widehat{\theta},\theta)\pi(\theta)\,d\theta-\varepsilon\pi(\Theta_{0})\\
 & <\int_{\Theta}R(\widehat{\theta},\theta)\pi(\theta)\,d\theta,
\end{aligned}
$$

so $\widehat{\theta}$ cannot be Bayes.
:::

Is the converse true? That is, is it true that an admissible estimator
must be Bayes? This is answered by the complete class theorem, which
roughly states that if $\widehat{\theta}$ is admissible, then there
exists a sequence of priors $(\pi_{m})$ such that $\widehat{\theta}_{\pi_{m}}\to\widehat{\theta}$. 

:::theorem
Let $X_{1},\ldots,X_{n}\overset{\mathrm{iid}}{\sim}N(\theta,1)$,
$\theta\in\mathbb{R}$. Consider the loss function $L(\hat{\theta},\theta)=(\hat{\theta}-\theta)^{2}$.
Then $\overline{X}$ is admissible.
:::

:::proof
The proof is by contradiction. Suppose that $\widehat{\theta}=\overline{X}$
is inadmissible, so that there exists $\widetilde{\theta}$ such that
$R(\widetilde{\theta},\theta)\leq\frac{1}{n}$ for all $\theta\in\mathbb{R}$,
and $R(\widetilde{\theta},\theta_{0})<\frac{1}{n}$ for some $\theta_{0}\in\mathbb{R}$.
Then there exists $\varepsilon>0$ and $(a,b)\ni\theta_{0}$ such
that $R(\widetilde{\theta},\theta_{0})<\frac{1}{n}-\varepsilon$.
Consider $\pi_{m}=N(0,m)$. Then we have seen previously that the
Bayes risk is

$$
\int_{\mathbb{R}}R(\widehat{\theta}_{\pi_{m}},\theta)\pi_{m}(\theta)\,d\theta=\frac{1}{n+m^{-1}},
$$

and

$$
\frac{1}{n}-\int_{\mathbb{R}}R(\widehat{\theta}_{\pi_{m}},\theta)\pi_{m}(\theta)\,d\theta=\frac{1}{n}-\frac{1}{n+m^{-1}}\asymp\frac{1}{m}.
$$

Then

$$
\begin{aligned}
\frac{1}{n}-\int_{\mathbb{R}}R(\widetilde{\theta},\theta)\pi_{m}(\theta)\,d\theta & =\int_{\mathbb{R}}\left(\frac{1}{n}-R(\widetilde{\theta},\theta)\right)\pi_{m}(\theta)\,d\theta\\
 & =\int_{(a,b)}\left(\frac{1}{n}-R(\widetilde{\theta},\theta)\right)\pi_{m}(\theta)\,d\theta+\int_{\mathbb{R}\backslash(a,b)}\left(\frac{1}{n}-R(\widetilde{\theta},\theta)\right)\pi_{m}(\theta)\,d\theta\\
 & \geq\epsilon\int_{(a,b)}\pi_{m}(\theta)\,d\theta\\
 & =\epsilon\mathbb{P}\left(\frac{a}{\sqrt{m}}<N(0,1)<\frac{b}{\sqrt{m}}\right)\\
 & =\epsilon\int_{\frac{a}{\sqrt{m}}}^{\frac{b}{\sqrt{m}}}\frac{1}{\sqrt{2\pi}}e^{-x^{2}/2}\,dx\\
 & \asymp\frac{1}{\sqrt{m}}.
\end{aligned}
$$

So there exists $m$ sufficiently large such that

$$
\frac{1}{n}-\int_{\mathbb{R}}R(\widehat{\theta}_{\pi_{m}},\theta)\pi_{m}(\theta)\,d\theta<\frac{1}{n}-\int_{\mathbb{R}}R(\widetilde{\theta},\theta)\pi_{m}(\theta)\,d\theta,
$$

which is equivalent to 

$$
\int_{\mathbb{R}}R(\widetilde{\theta},\theta)\pi_{m}(\theta)\,d\theta<\int_{\mathbb{R}}R(\widehat{\theta}_{\pi_{m}},\theta)\pi_{m}(\theta)\,d\theta.
$$

This is a contradiction as $\widehat{\theta}_{\pi_{m}}$ achieves
the smallest Bayes risk by definition.
:::
