import { AlertTriangle, TrendingDown, Zap, Shield, ArrowRight, BarChart3, Bell, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Nav */}
      <nav className="border-b border-slate-800 backdrop-blur-sm bg-slate-950/80 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">ChurnGuard AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#how" className="hover:text-white transition">How it Works</a>
          </div>
          <a href="#pricing" className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-sm text-orange-400 mb-8">
          <AlertTriangle className="w-3.5 h-3.5" />
          AI-Powered Churn Prediction
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Stop Losing Customers<br />Before They Leave
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          ChurnGuard AI predicts which customers are about to cancel — giving you time to act. 
          Reduce churn by up to 40% with AI-powered early warnings.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition flex items-center gap-2">
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#how" className="text-slate-400 hover:text-white font-medium px-8 py-3.5 rounded-xl text-lg border border-slate-700 hover:border-slate-600 transition">
            See How It Works
          </a>
        </div>
        <p className="text-sm text-slate-500 mt-4">No credit card required • 14-day free trial • Setup in 5 minutes</p>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "40%", label: "Avg. Churn Reduction" },
              { value: "92%", label: "Prediction Accuracy" },
              { value: "5min", label: "Setup Time" },
              { value: "10x", label: "Cheaper Than Alternatives" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Predict churn before it happens</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">AI that analyzes your customer data and tells you exactly who&apos;s at risk.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BarChart3, title: "Behavioral Analysis", desc: "Analyzes login frequency, feature usage, support tickets, and payment patterns to detect early warning signs." },
            { icon: Bell, title: "Real-Time Alerts", desc: "Get instant notifications when a customer's churn risk spikes. Never be surprised by a cancellation again." },
            { icon: Users, title: "Customer Scoring", desc: "Every customer gets a 0-100 churn risk score. Prioritize your retention efforts on the right accounts." },
            { icon: TrendingDown, title: "Trend Detection", desc: "Spot declining engagement trends weeks before they turn into cancellations. Act while you still can." },
            { icon: Shield, title: "Stripe Integration", desc: "Connects directly to your Stripe account. Analyzes payment failures, plan downgrades, and billing issues." },
            { icon: Zap, title: "5-Minute Setup", desc: "Just paste your Stripe API key. No code required. Start seeing predictions within minutes." },
          ].map((f, i) => (
            <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Three simple steps</h2>
          <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">From setup to first prediction in under 5 minutes.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Connect Stripe", desc: "Paste your Stripe API key. We securely read your customer and payment data." },
              { step: "02", title: "AI Analyzes", desc: "Our AI analyzes usage patterns, payment history, and engagement signals across all customers." },
              { step: "03", title: "Get Alerts", desc: "Receive real-time alerts for at-risk customers. Take action before they cancel." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-orange-500/20 mb-4">{s.step}</div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-slate-400 text-center max-w-xl mx-auto mb-16">No hidden fees. No long-term contracts.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Starter", price: "$29", period: "/mo", customers: "500 customers", features: ["Stripe integration", "Churn scoring", "Email alerts", "CSV export"], cta: "Start Free Trial", popular: false },
            { name: "Growth", price: "$79", period: "/mo", customers: "2,500 customers", features: ["Everything in Starter", "Slack alerts", "API access", "Retention playbooks", "Priority support"], cta: "Start Free Trial", popular: true },
            { name: "Pro", price: "$149", period: "/mo", customers: "Unlimited customers", features: ["Everything in Growth", "Custom integrations", "Dedicated account manager", "SLA guarantee", "White-label reports"], cta: "Start Free Trial", popular: false },
          ].map((p, i) => (
            <div key={i} className={`rounded-2xl p-8 border ${p.popular ? "border-orange-500 bg-orange-500/5 scale-105" : "border-slate-700/50 bg-slate-800/50"} transition`}>
              {p.popular && <div className="text-xs font-semibold text-orange-400 mb-3 uppercase tracking-wider">Most Popular</div>}
              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-slate-400">{p.period}</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">{p.customers}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                    <AlertTriangle className="w-4 h-4 text-orange-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold transition ${p.popular ? "bg-orange-600 hover:bg-orange-500 text-white" : "bg-slate-700 hover:bg-slate-600 text-white"}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop losing revenue to preventable churn</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">Join SaaS companies reducing churn by 40% with AI-powered predictions.</p>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition">
            Start Your Free Trial <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center">
              <TrendingDown className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold">ChurnGuard AI</span>
          </div>
          <p className="text-sm text-slate-500">© 2026 ChurnGuard AI by ZOO. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
