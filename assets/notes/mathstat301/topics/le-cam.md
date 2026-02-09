# Le Cam's Method

Le Cam's two point method gives us a way to lower bound the minimax
risk. The idea is to fix two points $\theta_{0},\theta_{1}\in\Theta$
and put the prior $\pi=\frac{1}{2}\delta_{\theta_{0}}+\frac{1}{2}\delta_{\theta_{1}}$
on $\theta$, so that

$$
\begin{aligned}
\sup_{\theta\in\Theta}\mathbb{E}(\widehat{\theta}-\theta)^{2} & \geq\frac{1}{2}\mathbb{E}_{\theta_{0}}(\widehat{\theta}-\theta_{0})^{2}+\frac{1}{2}\mathbb{E}_{\theta_{1}}(\widehat{\theta}-\theta_{1})^{2}\\
 & =\frac{1}{2}\int\left[(\widehat{\theta}-\theta_{0})^{2}p_{\theta_{0}}+(\widehat{\theta}-\theta_{1})^{2}p_{\theta_{1}}\right]\\
 & \geq\frac{1}{2}\int\left[(\widehat{\theta}-\theta_{0})^{2}+(\widehat{\theta}-\theta_{1})^{2}\right]p_{\theta_{0}}\land p_{\theta_{1}}\\
 & \geq\frac{(\theta_{0}-\theta_{1})^{2}}{4}\int p_{\theta_{0}}\land p_{\theta_{1}},
\end{aligned}
$$

where the last inequality follows from $(a+b)^{2}\leq2a^{2}+2b^{2}$
which holds for all $a,b\in\mathbb{R}$. Taking infimum gives the
following. 

:::theorem Le Cam's two point method
If $L(\widehat{\theta},\theta)=(\widehat{\theta}-\theta)^{2}$,
then for all $\theta_{0},\theta_{1}\in\Theta$, we have

$$
\inf_{\widehat{\theta}}\sup_{\theta\in\Theta}\mathbb{E}(\hat{\theta}-\theta)^{2}\geq\frac{(\theta_{0}-\theta_{1})^{2}}{4}\int\min(p_{\theta_{0}},p_{\theta_{1}}).
$$

:::

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}N(\theta,1)$ where
$\theta\in\mathbb{R}$. We already know from before that the minimax
risk is exactly $\frac{1}{n}$. We will re-derive this lower bound
(up to a constant). Let $\theta_{0}=0$ and $\theta_{1}=\frac{1}{\sqrt{n}}$.
Then by Le Cam's lemma, 

$$
\begin{aligned}
\inf_{\widehat{\theta}}\sup_{\theta\in\Theta}\mathbb{E}(\hat{\theta}-\theta)^{2} & \geq\frac{1}{4n}\int p_{0}^{n}\land p_{1/\sqrt{n}}^{n}\\
 & =\frac{1}{4n}\inf_{\phi}\left(P_{0}^{n}\phi+P_{\frac{1}{\sqrt{n}}}^{n}(1-\phi)\right)\\
 & \geq\frac{1}{4n}P_{0}^{n}(\{p_{0}^{n}\leq p_{\frac{1}{\sqrt{n}}}^{n}\})\\
 & =\frac{1}{4n}P_{0}^{n}\left(\left\{ \prod_{i=1}^{n}\frac{e^{-\frac{1}{2}(X_{i}-\frac{1}{\sqrt{n}})^{2}}}{e^{-\frac{1}{2}X_{i}^{2}}}\geq1\right\} \right)\\
 & =\frac{1}{4n}P_{0}^{n}\left(\left\{ \sum_{i=1}^{n}\left[\left(X_{i}-\frac{1}{\sqrt{n}}\right)^{2}-X_{i}^{2}\right]<0\right\} \right)\\
 & =\frac{1}{4n}P_{0}^{n}\left(\left\{ \frac{1}{\sqrt{n}}\sum_{i=1}^{n}X_{i}>\frac{1}{2}\right\} \right)\\
 & =\frac{1}{4n}\mathbb{P}(N(0,1)>\frac{1}{2}),
\end{aligned}
$$

so we have the lower bound

$$
\inf_{\hat{\theta}}\sup_{\theta\in\mathbb{R}}\mathbb{E}_{\theta}(\widehat{\theta}-\theta)^{2}\geq Cn^{-1}
$$

where $C:=\mathbb{P}(N(0,1)>\frac{1}{2})/4$.
:::

:::example
Let $X_{1},\ldots,X_{n}\overset{\text{iid}}{\sim}\text{Unif}(0,\theta)$
where $\theta\in[0,1]$. Let $\widehat{\theta}=X_{(n)}$. Then

$$
\begin{aligned}
\mathbb{E}_{\theta}(\widehat{\theta}-\theta)^{2} & =\int_{0}^{\theta}(t-\theta)^{2}\theta^{-n}nt^{n-1}\,dt=\frac{2\theta^{2}}{(n+1)(n+2)},
\end{aligned}
$$

so 

$$
\sup_{\theta\in[0,1]}\mathbb{E}_{\theta}(\widehat{\theta}-\theta)^{2}=\frac{2}{(n+1)(n+2)}=O(n^{-2}).
$$

This gives an upper bound on the minimax rate. For the lower bound,
we use Le Cam's two point method. Let $\theta_{1}=1$ and $\theta_{2}=1-\frac{1}{n}$.
Then

$$
\begin{aligned}
\inf_{\widehat{\theta}}\sup_{\theta\in[0,1]}\mathbb{E}_{\theta}(\hat{\theta}-\theta)^{2} & \geq\frac{1}{4n^{2}}\int p_{1}^{n}\land p_{1-\frac{1}{n}}^{n}\\
 & \geq\frac{1}{8n^{2}}\left(\int\sqrt{p_{1}^{n}p_{1-\frac{1}{n}}^{n}}\right)^{2}\\
 & =\frac{1}{8n^{2}}\left(\int\sqrt{p_{1}p_{1-\frac{1}{n}}}\right)^{2n}\\
 & =\frac{1}{8n^{2}}\left(\int_{0}^{1-\frac{1}{n}}\sqrt{\frac{1}{1-\frac{1}{n}}}\right)^{2n}\\
 & =\frac{1}{8n^{2}}\left(1-\frac{1}{n}\right)^{n},
\end{aligned}
$$

where for the second inequality we used $\int p\land q\geq\frac{1}{2}\left(\int\sqrt{pq}\right)^{2}$.
So we have

$$
\inf_{\hat{\theta}}\sup_{\theta\in\mathbb{R}}\mathbb{E}_{\theta}(\hat{\theta}-\theta)^{2}\asymp n^{-2}.
$$

:::

## Lower Bound for Gaussian Sequence Model

Now we want to prove the minimax lower bound for the Gaussian sequence
problem. Recall that we have observations $X_{j}\sim N(\theta_{j},\frac{1}{n})$,
$j\in\mathbb{N}$, where $\theta\in\Theta_{\alpha}(R)=\{\theta:\sum_{j=1}^{\infty}j^{2\alpha}\theta_{j}^{2}\leq R^{2}\}$.
We want to show that

$$
\inf_{\hat{\theta}}\sup_{\theta\in\Theta_{\alpha}(R)}\mathbb{E}_{\theta}\Vert\hat{\theta}-\theta\Vert^{2}\geq cn^{\frac{-2\alpha}{2\alpha+1}}.
$$

Let us define $\Theta_{0}=\{\theta:\theta_{j}\in\{0,\frac{1}{\sqrt{n}}\}\text{ for }j=1,\ldots,k,\theta_{j}=0\text{ for }j>k\}$.
Then $|\Theta_{0}|=2^{k}$. To ensure that $\Theta_{0}\subseteq\Theta_{\alpha}(R)$,
we note that

$$
\sum_{j=1}^{\infty}j^{2\alpha}\theta_{j}^{2}\leq\frac{1}{n}\sum_{j=1}^{k}j^{2\alpha}\leq\frac{k^{2\alpha+1}}{n}.
$$

Solving $\frac{k^{2\alpha+1}}{n}\leq R^{2}$ gives $k\asymp n^{\frac{1}{2\alpha+1}}$.
Then

$$
\begin{aligned}
\inf_{\widehat{\theta}}\sup_{\theta\in\Theta_{\alpha}(R)}\mathbb{E}_{\theta}\Vert\widehat{\theta}-\theta\Vert^{2} & \geq\inf_{\widehat{\theta}}\sup_{\theta\in\Theta_{0}}\mathbb{E}_{\theta}\Vert\widehat{\theta}-\theta\Vert^{2}\\
 & \geq\inf_{\widehat{\theta}}\operatornamewithlimits{ave}_{\theta\in\Theta_{0}}\mathbb{E}_{\theta}\Vert\widehat{\theta}-\theta\Vert^{2}\\
 & \geq\inf_{\widehat{\theta}}\operatornamewithlimits{ave}_{\theta\in\Theta_{0}}\sum_{j=1}^{k}(\widehat{\theta}_{j}-\theta_{j})^{2}\\
 & =\inf_{\widehat{\theta}}\sum_{j=1}^{k}\operatornamewithlimits{ave}_{\theta\in\Theta_{0}}\mathbb{E}_{\theta}(\widehat{\theta}_{j}-\theta_{j})^{2}\\
 & =\inf_{\widehat{\theta}}\sum_{j=1}^{k}\operatornamewithlimits{ave}_{\theta_{-j}}\left[\frac{1}{2}\mathbb{E}_{(\theta_{-j},\theta_{j}=0)}(\widehat{\theta}_{j})^{2}+\frac{1}{2}\mathbb{E}_{(\theta_{-j},\theta_{j}=\frac{1}{\sqrt{n}})}(\widehat{\theta}_{j}-\frac{1}{\sqrt{n}})^{2}\right]\\
 & \geq\sum_{j=1}^{k}\operatornamewithlimits{ave}_{\theta_{-j}}\inf_{\widehat{\theta}_{j}}\left[\frac{1}{2}\mathbb{E}_{(\theta_{-j},\theta_{j}=0)}(\widehat{\theta}_{j})^{2}+\frac{1}{2}\mathbb{E}_{(\theta_{-j},\theta_{j}=\frac{1}{\sqrt{n}})}(\widehat{\theta}_{j}-\frac{1}{\sqrt{n}})^{2}\right].
\end{aligned}
$$

Using the same argument as in the proof of Le Cam's method to estimate
the infimum, we have

$$
\inf_{\widehat{\theta}}\sup_{\theta\in\Theta_{\alpha}(R)}\mathbb{E}_{\theta}\Vert\widehat{\theta}-\theta\Vert^{2}\geq\sum_{j=1}^{k}\operatornamewithlimits{ave}_{\theta_{-j}}\frac{1}{4n}\int p_{(\theta_{-j},\theta_{j}=0)}\land p_{(\theta_{-j},\theta_{j}=\frac{1}{\sqrt{n}})}.
$$

Since only the $\theta_{j}$ differs between the two hypotheses, this
is equivalent to testing $H_{0}:X_{j}\sim N(0,\frac{1}{n})$ versus
$H_{1}:X_{j}\sim N(\frac{1}{\sqrt{n}},\frac{1}{n})$. Therefore, letting
$P=N(0,\frac{1}{n})$ and $Q=N(\frac{1}{\sqrt{n}},\frac{1}{n})$,
we have

$$
\inf_{\widehat{\theta}}\sup_{\theta\in\Theta_{\alpha}(R)}\mathbb{E}_{\theta}\Vert\widehat{\theta}-\theta\Vert^{2}\geq\sum_{j=1}^{k}\operatornamewithlimits{ave}_{\theta_{-j}}\inf_{\phi}(P\phi+Q(1-\phi)).
$$

From an example above, we know that the optimal testing error for
this test satisfies 

$$
\inf_{\phi}(P\phi+Q(1-\phi))\geq c
$$

where $c=\mathbb{P}(N(0,1)>\frac{1}{2})$. Therefore, 

$$
\inf_{\widehat{\theta}}\sup_{\theta\in\Theta_{\alpha}(R)}\mathbb{E}_{\theta}\Vert\widehat{\theta}-\theta\Vert^{2}\geq\frac{ck}{4n}\asymp n^{-\frac{2\alpha}{2\alpha+1}}.
$$
