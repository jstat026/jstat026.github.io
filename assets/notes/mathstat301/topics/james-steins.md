# James-Stein Estimator

Let $X_{1},\ldots,X_{n}\overset{\mathrm{i.i.d.}}{\sim}N(\theta,I_{p})$
where $\theta\in\mathbb{R}^{p}$, and consider the loss function $L(\widehat{\theta},\theta)=\Vert\widehat{\theta}-\theta\Vert^{2}$.
Admissibility of $\overline{X}$ in higher dimensions is much more
difficult. For $p=2$, admissibility of $\overline{X}$ was proved
by Stein. The proof involves constructing much more complex priors.
Surprisingly, $\overline{X}$ is no longer admissible if $p\geq3$. 

:::definition
The James-Stein estimator is defined as

$$
\widehat{\theta}_{\text{JS}}=\left(1-\frac{p-2}{n\Vert\overline{X}\Vert^{2}}\right)\overline{X}.
$$

:::

It turns out that in $p\geq3$, the James-Stein estimator has a strictly
smaller risk than $\overline{X}$. Since $\overline{X}$ is minimax,
so is $\widehat{\theta}_{\text{JS}}$. This shows that minimax estimators
are not necessarily admissible, and also that minimax estimators are
not unique. 

:::theorem Stein's identity
If $Z\sim N(0,I_{p})$ then we have 

$$
\mathbb{E}\langle Z,g(Z)\rangle=\mathbb{E}\langle\nabla,g(Z)\rangle
$$

 for any $g\in C^{1}(\mathbb{R}^{p};\mathbb{R}^{p})$ for which both
expectations exist.
:::

:::proof
We will prove this in the $p=1$ case only. Let $\phi(x)=\frac{1}{\sqrt{2\pi}}e^{-x^{2}/2}$.
Then $\phi'(x)=-x\phi(x)$, so 

$$
\mathbb{E}[Zg(Z)]=\int xg(x)\phi(x)\,dx=-\int\phi'(x)g(x)\,dx=\int\phi(x)g'(x)\,dx=\mathbb{E}[g'(Z)]
$$

where the second last equality follows from integration by parts.
:::

:::theorem
Let $p\geq3$. Then $\mathbb{E}_{\theta}\Vert\hat{\theta}_{\mathrm{JS}}-\theta\Vert^{2}<\frac{p}{n}=\mathbb{E}_{\theta}\Vert\overline{X}-\theta\Vert^{2}$
for all $\theta\in\mathbb{R}^{p}$.
:::

:::proof
Let us write $\overline{X}=\frac{1}{\sqrt{n}}(\mu+Z)$ where $Z\sim N(0,I_{p})$
and $\mu=\sqrt{n}\theta$. We have

$$
\begin{aligned}
\mathbb{E}_{\theta}\Vert\hat{\theta}_{\mathrm{JS}}-\theta\Vert^{2} & =\mathbb{E}_{\theta}\left\Vert \left(1-\frac{p-2}{n\Vert\overline{X}\Vert^{2}}\right)\overline{X}-\theta\right\Vert ^{2}\\
 & =\mathbb{E}_{\theta}\left\Vert \overline{X}-\theta-\frac{p-2}{n\Vert\overline{X}\Vert^{2}}\overline{X}\right\Vert ^{2}\\
 & =\mathbb{E}_{\theta}\left\Vert \frac{1}{\sqrt{n}}Z-\frac{p-2}{\Vert\mu+Z\Vert^{2}}\frac{1}{\sqrt{n}}(\mu+Z)\right\Vert ^{2}\\
 & =\frac{1}{n}\mathbb{E}_{\theta}\left\Vert Z-\frac{p-2}{\Vert\mu+Z\Vert^{2}}(\mu+Z)\right\Vert ^{2}\\
 & =\frac{1}{n}\left(\mathbb{E}_{\theta}\Vert Z\Vert^{2}+\mathbb{E}_{\theta}\frac{(p-2)^{2}}{\Vert\mu+Z\Vert^{2}}-2(p-2)\mathbb{E}_{\theta}\left\langle Z,\frac{\mu+Z}{\Vert\mu+Z\Vert^{2}}\right\rangle \right).
\end{aligned}
$$

We have $\mathbb{E}_{\theta}\left\langle Z,\frac{\mu+Z}{\Vert\mu+Z\Vert^{2}}\right\rangle =\mathbb{E}_{\theta}\langle Z,g(Z)\rangle$,
where $g_{j}(z)=\frac{\mu_{j}+z_{j}}{\Vert\mu+z\Vert^{2}}$. Computing
the derivative gives

$$
\frac{\partial}{\partial z_{j}}g_{j}(z)=\frac{\Vert\mu+z\Vert^{2}-2(\mu_{j}+z_{j})^{2}}{\Vert\mu+z\Vert^{4}},
$$

so by Stein's identity we have

$$
\begin{aligned}
\mathbb{E}_{\theta}\left\langle Z,\frac{\mu+Z}{\Vert\mu+Z\Vert^{2}}\right\rangle  & =\sum_{j=1}^{p}\mathbb{E}_{\theta}\frac{\partial}{\partial z_{j}}g_{j}(Z)\\
 & =\sum_{j=1}^{p}\mathbb{E}_{\theta}\frac{\Vert\mu+Z\Vert^{2}-2(\mu_{j}+Z_{j})^{2}}{\Vert\mu+Z\Vert^{4}}\\
 & =\mathbb{E}_{\theta}\frac{(p-2)\Vert\mu+Z\Vert^{2}}{\Vert\mu+Z\Vert^{4}}\\
 & =\mathbb{E}_{\theta}\frac{p-2}{\Vert\mu+Z\Vert^{2}}.
\end{aligned}
$$

Then 

$$
\begin{aligned}
\mathbb{E}_{\theta}\Vert\hat{\theta}_{\mathrm{JS}}-\theta\Vert^{2} & =\frac{1}{n}\left(\mathbb{E}_{\theta}\Vert Z\Vert^{2}+\mathbb{E}_{\theta}\frac{(p-2)^{2}}{\Vert\mu+Z\Vert^{2}}-2(p-2)\mathbb{E}_{\theta}\left\langle Z,\frac{\mu+Z}{\Vert\mu+Z\Vert^{2}}\right\rangle \right).\\
 & =\frac{1}{n}\left(p-(p-2)^{2}\mathbb{E}_{\theta}\frac{1}{\Vert\mu+Z\Vert^{2}}\right)\\
 & <\frac{p}{n}.
\end{aligned}
$$

:::

We see that 

$$
R(\hat{\theta}_{\text{JS}},\theta)=\frac{1}{n}\left(p-(p-2)^{2}\mathbb{E}_{\theta}\frac{1}{\Vert\sqrt{n}\theta+Z\Vert^{2}}\right),\quad Z\sim N(0,1).
$$

By symmetry, $R(\hat{\theta}_{\text{JS}},\theta)$ depends only on
the magnitude of $\theta$, and we have 

$$
\lim_{\Vert\theta\Vert\to\infty}R(\hat{\theta}_{\text{JS}},\theta)=\frac{p}{n},\quad\text{so }\sup_{\theta\in\mathbb{R}^{p}}R(\hat{\theta}_{\text{JS}},\theta)=\sup_{\theta\in\mathbb{R}^{p}}R(\overline{X},\theta).
$$

Next, we consider the shrinkage estimator. Again, let $X_{1},\ldots,X_{n}\overset{\mathrm{iid}}{\sim}N(\theta,I_{p})$
where $\theta\in\mathbb{R}^{p}$ and consider the loss function $L(\hat{\theta},\theta)=\Vert\hat{\theta}-\theta\Vert^{2}$.
Let $\hat{\theta}_{c}=c\overline{X}$. We want to find $c^{\ast}$
which minimizes $R(\hat{\theta}_{c},\theta)$. We have

$$
R(\hat{\theta}_{c},\theta)=\mathbb{E}_{\theta}\Vert c\overline{X}-c\theta\Vert^{2}+\Vert c\theta-\theta\Vert^{2}=c^{2}\frac{p}{n}+(c-1)^{2}\Vert\theta\Vert^{2},
$$

so

$$
\frac{d}{dc}R(\hat{\theta}_{c},\theta)=2c\frac{p}{n}+2(c-1)\Vert\theta\Vert^{2}\implies c^{\ast}=\frac{\Vert\theta\Vert^{2}}{\frac{p}{n}+\Vert\theta\Vert^{2}}.
$$

The estimator 

$$
\hat{\theta}_{c^{\ast}}=\frac{\Vert\theta\Vert^{2}}{\frac{p}{n}+\Vert\theta\Vert^{2}}\overline{X}=\left(1-\frac{p}{p+n\Vert\theta\Vert^{2}}\right)\overline{X}
$$

is called the optimal shrinkage estimator. The risk function is

$$
R(\hat{\theta}_{c^{\ast}},\theta)=\left(\frac{b}{a+b}\right)^{2}a+\left(\frac{a}{a+b}\right)^{2}b=\frac{b^{2}a+a^{2}b}{(a+b)^{2}}=\frac{ab}{a+b}=\frac{\frac{p}{n}\Vert\theta\Vert^{2}}{\frac{p}{n}+\Vert\theta\Vert^{2}}\leq\min\left(\frac{p}{n},\Vert\theta\Vert^{2}\right),
$$

where $a=\frac{p}{n}$ and $b=\Vert\theta\Vert^{2}$. The optimal
shrinkage estimator is also called the oracle estimator because it
depends on the true parameter $\theta$ which is unknown. The optimal
shrinkage estimator is nearly optimal in the following sense.

:::theorem Oracle inequality
We have

$$
R(\hat{\theta}_{\mathrm{JS}},\theta)\leq\inf_{c}R(\hat{\theta}_{c},\theta)+\frac{2}{n}.
$$

:::

:::proof
We have

$$
R(\hat{\theta}_{\mathrm{JS}},\theta)=\frac{1}{n}\left(p-(p-2)^{2}\mathbb{E}\frac{1}{\Vert\sqrt{n}\theta+Z\Vert^{2}}\right),\quad Z\sim N(0,1).
$$

Note that $Z+\sqrt{n}\theta\sim\chi_{p,n\Vert\theta\Vert^{2}}^{2}\overset{d}{=}\chi_{p+2N}^{2}$
where $N\sim\text{Poisson}\left(\frac{n\Vert\theta\Vert^{2}}{2}\right)$,
so

$$
\mathbb{E}\frac{1}{\Vert\sqrt{n}\theta+Z\Vert^{2}}=\mathbb{E}\frac{1}{\chi_{p+2N}^{2}}=\mathbb{E}\frac{1}{p+2N-2}\geq\frac{1}{\mathbb{E}(p+2N-2)}=\frac{1}{p+n\Vert\theta\Vert^{2}-2}.
$$

Therefore, 

$$
\begin{aligned}
R(\hat{\theta}_{\mathrm{JS}},\theta) & \leq\frac{1}{n}\left(p-\frac{(p-2)^{2}}{p+n\Vert\theta\Vert^{2}-2}\right)\\
 & =\frac{1}{n}\frac{np\Vert\theta\Vert^{2}+2(p-2)}{p+n\Vert\theta\Vert^{2}-2}\\
 & =\frac{1}{n}\left(2+\frac{(p-2)\Vert\theta\Vert^{2}}{p-2+n\Vert\theta\Vert^{2}}\right)\\
 & =\frac{2}{n}+\frac{\frac{p-2}{n}\Vert\theta\Vert^{2}}{\frac{p-2}{n}+\Vert\theta\Vert^{2}}\\
 & \leq\frac{2}{n}+R(\hat{\theta}_{c^{\ast}},\theta).
\end{aligned}
$$

:::

It is worth noting that $\frac{2}{n}$ is independent of the dimension
$p$, so in high dimensions the optimal shrinkage estimator performs
very closely to the James-Stein estimator.
