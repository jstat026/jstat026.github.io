# Asymptotic efficiency

### Cramer-Rao lower bound

We know from previous discussions that the maximum likelihood estimator
is not always optimal (for example, see discussion on James-Stein
estimator.) But what about asymptotically as $n\to\infty$? Maximum
likelihood estimators are asymptotically efficient in the sense that
it achieves the Cramer-Rao lower bound under the regularity conditions
for asymptotical normality to hold. We state and prove the Cramer-Rao
lower bound for 1-dimensional parameter space. The same result holds
in higher dimensional parameter space.
:::theorem Cramer-Rao lower bound
Suppose $X\sim P_{\theta}$ has a score
function and Fisher information. If $\widehat{\theta}$ is unbiased,
then $\operatorname{Var}_{\theta}[\widehat{\theta}]\geq I_{\theta}^{-1}$.
:::

:::proof
We have
$$
\operatorname{Var}_{\theta}[\widehat{\theta}]I_{\theta}=\int p_{\theta}(\widehat{\theta}-\theta)^{2}\int p_{\theta}\left(\frac{\frac{\partial}{\partial\theta}p_{\theta}}{p_{\theta}}\right)^{2}\geq\left(\int(\widehat{\theta}-\theta)\frac{\partial}{\partial\theta}p_{\theta}\right)^{2}=\left(\frac{\partial}{\partial\theta}\mathbb{E}_{\theta}[\widehat{\theta}]\right)^{2}=1.
$$
:::

Since the Fisher information of $n$ independent observations is the
sum of each observation's Fisher information, we get the following.
:::theorem
If $X_{1},\ldots,X_{n}\overset{\text{i.i.d.}}{\sim}P_{\theta}$, then
for any unbiased estimator $\widehat{\theta}$, we have $\operatorname{Var}_{\theta}[\widehat{\theta}]\geq(nI_{\theta})^{-1}$.
:::

### Hodges' estimator

Although the maximum likelihood estimator achieves the Cramer-Rao
lower bound, it is possible to find estimators that have lower asymptotic
variance at at least one point. Suppose that $X_{1},\ldots,X_{n}\overset{\text{i.i.d.}}{\sim}N(\theta,1)$
and consider Hodges' estimator, given by
$$
\widehat{\theta}_{H}=\begin{cases}
\overline{X} & |\overline{X}|>n^{-1/4},\\
0 & |\overline{X}|\leq n^{-1/4}.
\end{cases}
$$
:::theorem
It holds that
$$
\sqrt{n}(\widehat{\theta}_{H}-\theta)\rightsquigarrow\begin{cases}
N(0,1) & \text{if }\theta\neq0,\\
0 & \text{if }\theta=0.
\end{cases}
$$
:::

:::proof
Since $X_{1},\ldots,X_{n}\overset{\text{i.i.d.}}{\sim}N(\theta,1)$,
we have $\overline{X}=\theta+\frac{1}{\sqrt{n}}Z$ where $Z\sim N(0,1)$.
Then we can write
$$
\begin{aligned}
\widehat{\theta}_{H} & =\overline{X}1(|\overline{X}|>n^{-1/4})\\
 & =(\theta+\frac{1}{\sqrt{n}}Z)1(|\theta+\frac{1}{\sqrt{n}}Z|>n^{-1/4})\\
 & =\theta-\theta1(|\theta+\frac{1}{\sqrt{n}}Z|\leq n^{-1/4})+\frac{1}{\sqrt{n}}Z1(|\theta+\frac{1}{\sqrt{n}}Z|>n^{-1/4}).
\end{aligned}
$$
This gives
$$
\sqrt{n}(\widehat{\theta}_{H}-\theta)=-\sqrt{n}\theta1(|\sqrt{n}\theta+Z|\leq n^{1/4})+Z1(|\sqrt{n}\theta+Z|>n^{1/4}).
$$
Consider the two cases:

- If $\theta\neq0$, then for every $\omega\in\Omega$ there exists
$N(\omega)$ such that $|\sqrt{n}\theta+Z(\omega)|>n^{1/4}$ for all
$n\geq N(\omega)$. Therefore, $1(|\sqrt{n}\theta+Z|\leq n^{1/4})$
converges to 0 almost surely, and we have $-\sqrt{n}\theta1(|\sqrt{n}\theta+Z|\leq n^{1/4})\to0$
since it is eventually 0. The complementary indicator $1(|\sqrt{n}\theta+Z|>n^{1/4})$
converges to 1, so Slutsky's theorem implies $\sqrt{n}(\widehat{\theta}_{H}-\theta)$
converges in probability to $Z\sim N(0,1)$.
- If $\theta=0$, then clearly we have $\sqrt{n}(\widehat{\theta}_{H}-\theta)=Z1(|Z|>n^{1/4})\rightsquigarrow0$.

:::
Thus, asymptotically Hodges' estimator performs as well as the maximum
likelihood estimator when $\theta\neq0$, but better when $\theta=0$.
Such an estimator is called superefficient and the point 0 is called
a superefficient point.

### Almost everywhere convolution theorem

In this section, we look at the almost everywhere convolution theorem,
which can be viewed as an asymptotic version of the Cramer-Rao lower
bound with a much stronger conclusion. Suppose that $(P_{\theta}:\theta\in\Theta)$
satisfies DQM at $\theta$, so that we have
$$
\log\prod_{i=1}^{n}\frac{p_{\theta+h/\sqrt{n}}(X_{i})}{p_{\theta}(X_{i})}=\frac{h}{\sqrt{n}}\sum_{i=1}^{n}S_{\theta}(X_{i})-\frac{h^{2}}{2}I_{\theta}+o_{P_{\theta}}\left(1\right)
$$
for all $h$ independent of $n$. Consider the local experiment $(P_{\theta+h/\sqrt{n}}^{n}:h\in\mathbb{R})$
where local refers to the fact that we treat $h$ as the parameter.
Notice that the right hand side looks like a Gaussian location model.
:::definition
We write $(P_{\theta+h/\sqrt{n}}^{n}:h\in\mathbb{R})\rightsquigarrow(N(h,I_{\theta}^{-1}):h\in\mathbb{R})$
to denote the expansion above.
:::

The idea of introducing this notation is to emphasize that the duality
between $(N(h,I_{\theta}^{-1}):h\in\mathbb{R})$ and $(P_{\theta+h/\sqrt{n}}^{n}:h\in\mathbb{R})$.
The following result makes this connection precise.
:::theorem Hájek-Le Cam convolution theorem
Suppose that $(P_{\theta}:\theta\in\Theta)$
satisfies DQM at $\theta$. Let $T_{n}$ be a statistic of $(P_{\theta+h/\sqrt{n}}^{n}:h\in\mathbb{R})$
that satisfies
$$
\sqrt{n}\left(T_{n}-\left(\theta+\frac{h}{\sqrt{n}}\right)\right)\overset{P_{\theta+h/\sqrt{n}}^{n}}{\rightsquigarrow}L_{\theta,h}
$$
for every $h\in\mathbb{R}$. Then there exists a randomized statistic
$T$ for $(N(h,I_{\theta}^{-1}):h\in\mathbb{R})$ such that $T-h\overset{N(h,I_{\theta}^{-1})}{\sim}L_{\theta,h}$
for every $h\in\mathbb{R}$.
:::

A randomized statistic is a statistic that is allowed to depend on
additional sources of randomness which are independent of the data.
To put it simply, whenever we have an estimator $T_{n}$ for $(P_{\theta+h/\sqrt{n}}^{n}:h\in\mathbb{R})$
with an asymptotic distribution, there exists an estimator for $(N(h,I_{\theta}^{-1}):h\in\mathbb{R})$
whose exact distribution is that same distribution.
:::definition
Suppose that $T$ is a randomized statistic for $(N(h,I_{\theta}^{-1}):h\in\mathbb{R})$.
We say that $T$ is equivariant in law if $T-h\overset{N(h,I_{\theta}^{-1})}{\sim}L_{\theta}$
for every $h\in\mathbb{R}$.
:::

The following is a property of Gaussian distributions.
:::theorem
If $T$ is a randomized statistic for $(N(h,I_{\theta}^{-1}):h\in\mathbb{R})$
which is equivariant in law satisfying $T-h\overset{N(h,I_{\theta}^{-1})}{\sim}L_{\theta}$
for all $h$, then we have
$$
L_{\theta}=N(0,I_{\theta}^{-1})\ast M_{\theta}
$$
for some distribution $M_{\theta}$.
:::

The above observation yields the following.
:::theorem convolution theorem
Suppose that $(P_{\theta}:\theta\in\Theta)$
satisfies DQM at $\theta$. Let $T_{n}$ be a statistic of $(P_{\theta+h/\sqrt{n}}^{n}:h\in\mathbb{R})$
that satisfies
$$
\sqrt{n}\left(T_{n}-\left(\theta+\frac{h}{\sqrt{n}}\right)\right)\overset{P_{\theta+h/\sqrt{n}}^{n}}{\rightsquigarrow}L_{\theta}
$$
 for every $h\in\mathbb{R}$. Then $L_{\theta}=N(0,I_{\theta}^{-1})\ast M_{\theta}$
for some distribution $M_{\theta}$.
:::

The condition of the above theorem is quite strong, but it can be
replaced by another condition that is much easier to verify.
:::theorem
Suppose that $(P_{\theta}:\theta\in\Theta)$ satisfies DQM at all
$\theta\in\Theta\subset\mathbb{R}$ and $T_{n}$ is a statistic satisfying
$\sqrt{n}(T_{n}-\theta)\overset{}{\rightsquigarrow}L_{\theta}$ for
every $\theta\in\Theta$. Then there exists a subsequence $(n_{k})$
such that for Lebesgue almost every $(\theta,h)$, along this subsequence
we have
$$
\sqrt{n}\left(T_{n}-\left(\theta+\frac{h}{\sqrt{n}}\right)\right)\overset{P_{\theta+h/\sqrt{n}}^{n}}{\rightsquigarrow}L_{\theta}.
$$
:::

This gives the following theorem.
:::theorem almost everywhere convolution theorem
Suppose that $(P_{\theta}:\theta\in\Theta)$
satisfies DQM at all $\theta\in\Theta\subset\mathbb{R}$ and $T_{n}$
is a statistic satisfying $\sqrt{n}(T_{n}-\theta)\overset{}{\rightsquigarrow}L_{\theta}$
for every $\theta\in\Theta$. Then for Lebesgue almost every $\theta$,
$$
L_{\theta}=N(0,I_{\theta}^{-1})\ast M_{\theta}
$$
for some distribution $M_{\theta}$.
:::

In particular, this implies that the set of superefficient points
must have measure zero.
