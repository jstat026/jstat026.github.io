# Consistency of MLE

Suppose that $X_{1},\ldots,X_{n}\overset{\text{i.i.d.}}{\sim}P_{\theta^{\ast}}$.
The maximum likelihood estimator is defined to be
$$
\widehat{\theta}=\argmax_{\theta}\sum_{i=1}^{n}\log p_{\theta}(X_{i}).
$$
For any two distributions $P$ and $Q$ with densities $p$ and $q$, we define the Kullback--Leibler divergence $D(P\Vert Q)$ to be
$$
D(P\Vert Q)=\int p\log\frac{p}{q}.
$$
It is easy to see that $D(P\Vert Q)\geq0$. Indeed, we have
$$
D(P\Vert Q)=\int p\log\frac{p}{q}=\int qf(\frac{p}{q}),
$$
where $f(t)=t\log t$. Since $f$ is convex, by Jensen's inequality,
we have
$$
\begin{aligned}
\int qf(\frac{p}{q}) & =\mathbb{E}_{X\sim Q}f\left(\frac{p(X)}{q(X)}\right)\\
 & \geq f\left(\mathbb{E}_{X\sim Q}\frac{p(X)}{q(X)}\right)\\
 & =f(1)\\
 & =0.
\end{aligned}
$$

In fact, we have a stronger result.
:::theorem
$D(P\Vert Q)\geq H^{2}(P,Q)$, where $H^{2}(P,Q)=\frac{1}{2}\int(\sqrt{p}-\sqrt{q})^{2}$
is the squared Hellinger distance,
:::

We note that
$$
\widehat{\theta}=\argmin_{\theta}\frac{1}{n}\sum_{i=1}^{n}\log\frac{p_{\theta^{\ast}}(X_{i})}{p_{\theta}(X_{i})}.
$$
By the law of large numbers, for each fixed $\theta$,
$$
\frac{1}{n}\sum_{i=1}^{n}\log\frac{p_{\theta^{\ast}}(X_{i})}{p_{\theta}(X_{i})}\overset{n\to\infty}{\longrightarrow}\int p_{\theta^{\ast}}\log\frac{p_{\theta^{\ast}}}{p_{\theta}}=D(P_{\theta^{\ast}}\Vert P_{\theta}).
$$
What is the minimizer of this limiting quantity? Of course, $\theta=\theta^{\ast}$
minimizes the expression, but there could be other values of $\theta$
that minimize the expression if we have $P_{\theta_{1}}=P_{\theta_{2}}$
for some $\theta_{1}\neq\theta_{2}$. To avoid this, we need to assume
$\theta_{1}\neq\theta_{2}\implies P_{\theta_{1}}\neq P_{\theta_{2}}$.
Quantitatively, this means that for all $\epsilon>0$, there
exists $\delta>0$ such that
$$
\Vert\theta_{1}-\theta_{2}\Vert>\epsilon\implies D(P_{\theta_{1}} \Vert P_{\theta_{2}})>\delta.
$$
This is called identifiability.

:::theorem consistency of MLE under identifiability and ULLN
Suppose that the model satisfies identifiability, and the uniform law of large numbers holds:
$$
\sup_{\theta}\left|\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta}(X_i)-\int p_{\theta^\ast}\log p_{\theta}\right|\xrightarrow[n\to\infty]{P_{\theta^\ast}}0.
$$
Then $\Vert\widehat{\theta}-\theta^{\ast}\Vert=o_{P_{\theta^{\ast}}}(1)$.
:::

:::proof
Given $\epsilon>0$, we have
$$
\begin{aligned}
\mathbb{P}_{\theta^{\ast}}\left(\Vert\widehat{\theta}-\theta^{\ast}\Vert>\epsilon\right) & \leq\mathbb{P}_{\theta^{\ast}}\left(D(P_{\theta^{\ast}} \Vert P_{\widehat{\theta}})>\delta\right).
\end{aligned}
$$
We have $D(P_{\theta^{\ast}}\Vert P_{\widehat{\theta}})=\int p_{\theta^{\ast}}\log p_{\theta^{\ast}}-\int p_{\theta^{\ast}}\log p_{\widehat{\theta}}$
and for large $n$,
$$
\int p_{\theta^{\ast}}\log p_{\theta^{\ast}}\approx\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta^{\ast}}(X_{i})\quad\text{and}\quad\int p_{\theta^{\ast}}\log p_{\widehat{\theta}}\approx\frac{1}{n}\sum_{i=1}^{n}\log p_{\widehat{\theta}}(X_{i}).
$$
The key intuition is that because $\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta^{\ast}}(X_{i})$
is smaller than $\frac{1}{n}\sum_{i=1}^{n}\log p_{\widehat{\theta}}(X_{i})$
by definition of $\widehat{\theta}$, we should expect $\mathbb{P}_{\theta^{\ast}}\left(D(P_{\theta^{\ast}}\Vert P_{\widehat{\theta}})>\delta\right)$
to approach 0 as $n\to\infty$. By the uniform law of large numbers, we have
$$
\mathbb{P}_{\theta^{\ast}}\left(\sup_{\theta}\left|\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta}(X_{i})-\int p_{\theta^{\ast}}\log p_{\theta}\right|>\frac{\delta}{2}\right)\overset{n\to\infty}{\longrightarrow}0.
$$
We have
$$
\begin{aligned}
D(P_{\theta^{\ast}}\Vert P_{\widehat{\theta}}) & =\int p_{\theta^{\ast}}\log p_{\theta^{\ast}}-\int p_{\theta^{\ast}}\log p_{\widehat{\theta}}\\
 & \leq\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta^{\ast}}(X_{i})-\frac{1}{n}\sum_{i=1}^{n}\log p_{\widehat{\theta}}(X_{i})+\left|\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta^{\ast}}(X_{i})-\int p_{\theta^{\ast}}\log p_{\theta^{\ast}}\right|+\left|\frac{1}{n}\sum_{i=1}^{n}\log p_{\widehat{\theta}}(X_{i})-\int p_{\theta^{\ast}}\log p_{\widehat{\theta}}\right|\\
 & \leq\frac{1}{n}\sum_{i=1}^{n}\log p_{\widehat{\theta}}(X_{i})-\frac{1}{n}\sum_{i=1}^{n}\log p_{\widehat{\theta}}(X_{i})+2\sup_{\theta}\left|\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta}(X_{i})-\int p_{\theta^{\ast}}\log p_{\theta}\right|\\
 & =2\sup_{\theta}\left|\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta}(X_{i})-\int p_{\theta^{\ast}}\log p_{\theta}\right|.
\end{aligned}
$$
Therefore,
$$
\mathbb{P}_{\theta^{\ast}}\left(D(P_{\theta^{\ast}}\Vert P_{\widehat{\theta}})>\delta\right)\leq\mathbb{P}_{\theta^{\ast}}\left(2\sup_{\theta}\left|\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta}(X_{i})-\int p_{\theta^{\ast}}\log p_{\theta}\right|>\delta\right)
$$
which converges to 0 as $n\to\infty$.
:::