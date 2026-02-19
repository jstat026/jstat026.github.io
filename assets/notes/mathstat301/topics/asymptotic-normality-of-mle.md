# Asymptotic normality of MLE

We will now derive the asymptotic distribution of MLE, under the assumption
that $\Vert\widehat{\theta}-\theta^{\ast}\Vert=o_{P_{\theta^{\ast}}}(1)$
and some other regularity conditions. We will assume in our arguments
that $\theta$ is a scalar, but all arguments can be easily modified
to work with vector parameters. Let us define the score function to
be $S_{\theta}(x)=\frac{\partial}{\partial\theta}\log p_{\theta}(x)$.
We will always assume that the distribution is sufficient regular
to allow interchanging differentiation and integration. Then we have
$\mathbb{E}_{\theta}S_{\theta}(X)=0$ because
$$
\mathbb{E}_{\theta}S_{\theta}(X)=\int p_{\theta}\frac{\partial}{\partial\theta}\log p_{\theta}=\int p_{\theta}\frac{\frac{\partial}{\partial\theta}p_{\theta}}{p_{\theta}}=\int\frac{\partial}{\partial\theta}p_{\theta}=\frac{\partial}{\partial\theta}\int p_{\theta}=0.
$$
We define the Fisher information to be $I_{\theta}=\operatorname{Var}_{\theta}(S_{\theta}(X))=\mathbb{E}_{\theta}\left(S_{\theta}(X)\right)^{2}$.
The claim is that $\sqrt{n}(\widehat{\theta}-\theta^{\ast})\rightsquigarrow N\left(0,I_{\theta^{\ast}}^{-1}\right).$
:::note
If the log-likelihood is twice differentiable, an alternative formula
for the Fisher information is
$$
I_{\theta}=-\mathbb{E}_{\theta}\left(\frac{\partial^{2}}{\partial\theta^{2}}\log p_{\theta}(X)\right).
$$
You can check this easily.
:::

### The intuition

We assume that the log-likelihood has a second derivative. Using a
Taylor expansion, we have
$$
\begin{aligned}
\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta}(X_{i}) & \approx\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta^{\ast}}(X_{i})+(\theta-\theta^{\ast})\frac{1}{n}\sum_{i=1}^{n}\left.\frac{\partial}{\partial\theta}\log p_{\theta}(X_{i})\right|_{\theta=\theta^{\ast}}+\frac{(\theta-\theta^{\ast})^{2}}{2}\frac{1}{n}\sum_{i=1}^{n}\left.\frac{\partial^{2}}{\partial\theta^{2}}\log p_{\theta}(X_{i})\right|_{\theta=\theta^{\ast}}\\
 & \approx\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta^{\ast}}(X_{i})+(\theta-\theta^{\ast})\frac{1}{n}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})-\frac{1}{2}(\theta-\theta^{\ast})^{2}I_{\theta^{\ast}}=:\widetilde{L}_{n}(\theta).
\end{aligned}
$$
Then $\widetilde{L}_{n}(\theta)$ is clearly concave, so it has a
unique maximizer. Define $\widetilde{\theta}=\argmax_{\theta}\widetilde{L}_{n}(\theta)$.
Then setting the derivative of $\widetilde{L}_{n}(\theta)$ to be
0, we have
$$
\widetilde{L}_{n}'(\theta)=\frac{1}{n}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})-(\theta-\theta^{\ast})I_{\theta^{\ast}}=0.
$$
Rearranging gives
$$
\widetilde{\theta}-\theta^{\ast}=\frac{1}{n}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})/I_{\theta^{\ast}}.
$$
Therefore,
$$
\sqrt{n}\left(\widetilde{\theta}-\theta^{\ast}\right)=\frac{1}{\sqrt{n}}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})/I_{\theta^{\ast}}\rightsquigarrow N\left(0,\operatorname{Var}_{\theta^{\ast}}\left(\frac{S_{\theta^{\ast}}(X_{i})}{I_{\theta^{\ast}}}\right)\right)=N\left(0,I_{\theta^{\ast}}^{-1}\right).
$$
Then since $\widetilde{\theta}\approx\widehat{\theta}$, intuitively
we have also $\sqrt{n}(\widetilde{\theta}-\theta^{\ast})\rightsquigarrow N\left(0,I_{\theta^{\ast}}^{-1}\right).$

### The rigorous argument

We will now give the rigorous argument which does not assume the existence
of the second derivative of the log-likelihood. Instead of taking
second derivative first and then apply the law of large numbers as
we did above, we will apply the law of large numbers first. The key
idea is that in some cases, the expectation operator can exhibit a
smoothing property that allows $L(\theta):=\mathbb{E}_{\theta^{\ast}}\log p_{\theta}(X)$
to be twice differentiable even if the log-likelihood is not.
:::theorem Pollard
Define $L_{n}(\theta)=\frac{1}{n}\sum_{i=1}^{n}\log p_{\theta}(X_{i})$
and define the empirical process operator $\nu_{n}$ by
$$
\nu_{n}f=\frac{1}{\sqrt{n}}\sum_{i=1}^{n}(f(X_{i})-\mathbb{E}_{\theta^{\ast}}f(X)).
$$
Assume that the following conditions hold:

- $\Vert\widehat{\theta}-\theta^{\ast}\Vert=o_{P_{\theta^{\ast}}}(1)$.
- For every sequence $(U_{n})$ of shrinking neighborhoods of
0, we have
$$
\sup_{t\in U_{n}}\frac{|\nu_{n}r(\cdot,t)|}{1+\sqrt{n}|t|}\overset{P_{\theta^{\ast}}}{\longrightarrow}0
$$
where $r$ is the remainder term in the first order expansion $\log p_{\theta^{\ast}+t}(X)=\log p_{\theta^{\ast}}(X)+tS_{\theta^{\ast}}(X)+|t|r(X,t)$.
This condition is known as stochastic differentiability.
- $L(\theta)$ has the second order expansion $L(\theta^{\ast}+t)=L(\theta^{\ast})-\frac{t^{2}}{2}I_{\theta^{\ast}}+o(t^{2})$
where $I_{\theta^{\ast}}=\mathbb{E}\left(S_{\theta^{\ast}}(X)\right)^{2}$.

Then $\sqrt{n}(\widehat{\theta}-\theta^{\ast})\rightsquigarrow N\left(0,I_{\theta^{\ast}}^{-1}\right).$
:::

### Step 1: Derive a quadratic expansion for $L_{n(\theta)$}

We have
$$
\begin{aligned}
L_{n}(\theta^{\ast}+t) & =L(\theta^{\ast}+t)+\frac{1}{\sqrt{n}}\nu_{n}\log p_{\theta^{\ast}+t}\\
 & =L(\theta^{\ast})-\frac{t^{2}}{2}I_{\theta^{\ast}}+o(t^{2})+\frac{1}{\sqrt{n}}\nu_{n}\left(\log p_{\theta^{\ast}}+tS_{\theta^{\ast}}+|t|r(\cdot,t)\right)\\
 & =\left(L(\theta^{\ast})+\frac{1}{\sqrt{n}}\nu_{n}\log p_{\theta^{\ast}}\right)+\frac{t}{\sqrt{n}}\nu_{n}S_{\theta^{\ast}}-\frac{t^{2}}{2}I_{\theta^{\ast}}+o(t^{2})+\frac{|t|}{\sqrt{n}}\nu_{n}r(\cdot,t)\\
 & =L_{n}(\theta^{\ast})+\frac{t}{n}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})-\frac{t^{2}}{2}I_{\theta^{\ast}}+o(t^{2})+\frac{|t|}{\sqrt{n}}\nu_{n}r(\cdot,t).
\end{aligned}
$$
This is almost the same expansion as we had from the intuitive argument.

### Step 2: Show that $\widehat{\theta$ is $\sqrt{n}$-consistent}

Let $\widehat{t}=\widehat{\theta}-\theta^{\ast}$. Then
$$
L_{n}(\theta^{\ast}+\widehat{t})=L_{n}(\theta^{\ast})+\frac{\widehat{t}}{n}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})-\frac{\widehat{t}^{2}}{2}I_{\theta^{\ast}}+o_{P_{\theta^{\ast}}}(\widehat{t}^{2})+\frac{|\widehat{t}|}{\sqrt{n}}\nu_{n}r(\cdot,\widehat{t}).
$$
Since $|\widehat{t}|=o_{P_{\theta^{\ast}}}(1)$, we can find a sequence
$(U_{n})$ of shrinking neighbourhoods of 0 such that $\widehat{t}\in U_{n}$.
Thus,
$$
\frac{|\nu_{n}r(\cdot,\widehat{t})|}{1+\sqrt{n}|\widehat{t}|}\leq\sup_{t\in U_{n}}\frac{|\nu_{n}r(\cdot,t)|}{1+\sqrt{n}|t|}=o_{P_{\theta^{\ast}}}(1).
$$
Therefore,
$$
\frac{|\widehat{t}|}{\sqrt{n}}|\nu_{n}r(\cdot,\widehat{t})|\leq\frac{|\widehat{t}|}{\sqrt{n}}(o_{P_{\theta^{\ast}}}(1)+o_{P_{\theta^{\ast}}}(\sqrt{n}|\widehat{t}|))=o_{P_{\theta^{\ast}}}\left(\frac{|\widehat{t}|}{\sqrt{n}}\right)+o_{P_{\theta^{\ast}}}(\widehat{t}^{2}).
$$
By definition of $\widehat{\theta}$, $L_{n}(\theta^{\ast}+\widehat{t})-L_{n}(\theta^{\ast})\geq0$,
so
$$
0\leq\frac{\widehat{t}}{n}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})-\frac{\widehat{t}^{2}}{2}I_{\theta^{\ast}}+o_{P_{\theta^{\ast}}}\left(\frac{|\widehat{t}|}{\sqrt{n}}\right)+o_{P_{\theta^{\ast}}}(\widehat{t}^{2}).
$$
This gives
$$
\begin{aligned}
\frac{\widehat{t}^{2}}{2}I_{\theta^{\ast}} & \leq|\widehat{t}|\left|\frac{1}{n}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})\right|+\left|o_{P_{\theta^{\ast}}}(\widehat{t}^{2})\right|+o_{P_{\theta^{\ast}}}\left(\frac{|\widehat{t}|}{\sqrt{n}}\right)
\end{aligned}
$$
which implies that
$$
\left(\frac{1}{2}I_{\theta^{\ast}}-o_{P_{\theta^{\ast}}}(1)\right)|\widehat{t}|\leq\left|\frac{1}{n}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})\right|+o_{P_{\theta^{\ast}}}\left(\frac{1}{\sqrt{n}}\right)=O_{P_{\theta^{\ast}}}\left(\frac{1}{\sqrt{n}}\right),
$$
so $|\widehat{t}|=O_{P_{\theta^{\ast}}}\left(\frac{1}{\sqrt{n}}\right)$.

### Step 3: Show asymptotic normality

For any $|t|=O_{P_{\theta}^{\ast}}\left(\frac{1}{\sqrt{n}}\right)$,
we have
$$
\begin{aligned}
L_{n}(\theta^{\ast}+t) & =L_{n}(\theta^{\ast})+\frac{t}{n}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})-\frac{t^{2}}{2}I_{\theta^{\ast}}+o_{P_{\theta^{\ast}}}\left(\frac{1}{n}\right)\\
 & =L_{n}(\theta^{\ast})-\frac{1}{2}I_{\theta^{\ast}}\left(t-\frac{1}{n}\sum_{i=1}^{n}\frac{S_{\theta^{\ast}}(X_{i})}{I_{\theta^{\ast}}}\right)^{2}+\frac{1}{2}\frac{\left(\frac{1}{n}\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})\right)^{2}}{I_{\theta^{\ast}}}+o_{P_{\theta^{\ast}}}\left(\frac{1}{n}\right).
\end{aligned}
$$
Let $\widetilde{t}=\sum_{i=1}^{n}S_{\theta^{\ast}}(X_{i})/I_{\theta^{\ast}}$.
Since both $|\widehat{t}|=O_{P_{\theta^{\ast}}}\left(\frac{1}{\sqrt{n}}\right)$
and $|\widetilde{t}|=O_{P_{\theta^{\ast}}}\left(\frac{1}{\sqrt{n}}\right)$
hold, the inequality $L_{n}(\theta^{\ast}+\widehat{t})\geq L_{n}(\theta^{\ast}+\widetilde{t})$
gives
$$
-\frac{1}{2}I_{\theta^{\ast}}\left(\widehat{t}-\frac{1}{n}\sum_{i=1}^{n}\frac{S_{\theta^{\ast}}(X_{i})}{I_{\theta^{\ast}}}\right)^{2}\geq o_{P_{\theta^{\ast}}}\left(\frac{1}{n}\right).
$$
This implies that
$$
\frac{1}{2}I_{\theta^{\ast}}\left(\widehat{t}-\frac{1}{n}\sum_{i=1}^{n}\frac{S_{\theta^{\ast}}(X_{i})}{I_{\theta^{\ast}}}\right)^{2}=o_{P_{\theta^{\ast}}}\left(\frac{1}{n}\right)\implies\widehat{t}=\frac{1}{n}\sum_{i=1}^{n}\frac{S_{\theta^{\ast}}(X_{i})}{I_{\theta^{\ast}}}+o_{P_{\theta^{\ast}}}\left(\frac{1}{\sqrt{n}}\right).
$$
Therefore,
$$
\sqrt{n}(\widehat{\theta}-\theta^{\ast})=\frac{1}{\sqrt{n}}\sum_{i=1}^{n}\frac{S_{\theta^{\ast}}(X_{i})}{I_{\theta^{\ast}}}+o_{P_{\theta^{\ast}}}\left(1\right)\rightsquigarrow N(0,I_{\theta^{\ast}}^{-1}).
$$
