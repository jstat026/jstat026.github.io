# Hypothesis Testing

In a two-point test, the null hypothesis is $H_{0}:X\sim P$ and the
alternative hypothesis is $H_{1}:X\sim Q$. The testing function is
a function $\phi:X\mapsto\{0,1\}$. We define the Type-I error to
be $P\phi:=\mathbb{E}_{X\sim P}\phi(X)$ and the Type-II error to
be $Q(1-\phi):=\mathbb{E}_{X\sim Q}(1-\phi(X))$. The testing error
is then $P\phi+Q(1-\phi)$, and the optimal testing error is $\inf_{\phi}(P\phi+Q(1-\phi))$. 

:::definition
The total variation distance between two probability measures $P$
and $Q$ is

$$
\mathsf{TV}(P,Q)=\sup_{B}\left|P(B)-Q(B)\right|
$$

where the supremum is taken over all measurable sets $B$.
:::

:::theorem
Suppose that $P$ and $Q$ are absolutely continuous with respect
to some dominating measure with density function $p$ and $q$. Then

$$
\begin{aligned}
\mathsf{TV}(P,Q) & =P(\{p(x)>q(x)\})-Q(\{p(x)>q(x)\})=\frac{1}{2}\int|p-q|=1-\int p\land q.
\end{aligned}
$$

:::

:::proof
Let $A:=\{p(x)>q(x)\}$. Then $\mathsf{TV}(P,Q)\geq P(A)-Q(A)$ by
definition. For all measurable sets $B$, we have

$$
\begin{aligned}
|P(B)-Q(B)| & =\left|\int_{B}(p-q)\right|\\
 & =\left|\int_{B\cap A}(p-q)+\int_{B\cap A^{c}}(p-q)\right|\\
 & =\left|\int_{B\cap A}(p-q)-\int_{B\cap A^{c}}(q-p)\right|\\
 & \leq\max\left(\int_{B\cap A}(p-q),\int_{B\cap A^{c}}(q-p)\right)\\
 & \leq\max\left(\int_{A}(p-q),\int_{A^{c}}(q-p)\right)\\
 & =\max\left(P(A)-Q(A),Q(A^{c})-P(A^{c})\right)\\
 & =P(A)-Q(A).
\end{aligned}
$$

Taking supremum over $B$ proves the first equality. For the second,
we note that

$$
\begin{aligned}
\frac{1}{2}\int|p-q| & =\frac{1}{2}\int_{A}(p-q)+\frac{1}{2}\int_{A^{c}}(q-p)\\
 & =\frac{1}{2}(P(A)-Q(A)+Q(A^{c})-P(A^{c}))\\
 & =P(A)-Q(A).
\end{aligned}
$$

For the third equality, we note that

$$
\int p\land q=\int_{A}q+\int_{A^{c}}p=Q(A)+1-P(A)=1-(P(A)-Q(A)),
$$

and rearranging gives the desired equality.
:::

:::theorem Neyman-Pearson lemma
The optimal testing error is given by

$$
\inf_{\phi}(P\phi+Q(1-\phi))=\int p\land q=1-\mathsf{TV}(P,Q)
$$

which is achieved by the likelihood ratio test $\phi^{\ast}(X)=\mathbb{{1}}_{\{p\leq q\}}(X)$.
:::

:::proof
For all $\phi$, we have $P\phi+Q(1-\phi)=\int p\phi+\int q(1-\phi)=\int p\phi+q(1-\phi)\geq\int\min(p,q)$,
so the optimal testing error is bounded below by $1-\mathsf{TV}(P,Q)=\int\min(p,q)$.
Conversely, we have

$$
\inf_{\phi}(P\phi+Q(1-\phi))\leq P\phi^{\ast}+Q(1-\phi^{\ast})=P(A^{c})+Q(A)=1-\mathsf{TV}(P,Q)=\int\min(p,q),
$$

where $A:=\{p(x)>q(x)\}$.
:::
