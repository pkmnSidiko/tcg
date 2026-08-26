---
Species: "{{Card Name}}"
Artist: "{{Artist}}"
Set: "{{Set}}"
CardNumber: "{{Card Number}}"
Rarity: "{{Rarity}}"
Foil: "{{Foil}}"
Condition: "{{Condition}}"
Quantity: {{Quantity}}
MarketValue: "{{Market Value}}"
PurchasePrice: "{{Purchase Price}}"
TargetBuyPrice: "{{Target Buy Price}}"
GainLoss: "{{GainLoss}}"
Language: "English"
Collected: {{Owned}}
---

# {{Card Name}}

- **Artist:** [[{{Artist}}]]
- **Set:** {{Set}} (#{{Card Number}})
- **Rarity:** {{Rarity}}
- **Finish:** {{Foil}}

---

### 📊 Collection & Market Tracking
- **Status:** `$= dv.current().Collected === true ? "🟢 Collected" : "❌ Missing"`
- **Condition:** {{Condition}} (Qty: {{Quantity}})
- **Market Value:** {{Market Value}}
- **Purchase Price:** {{Purchase Price}}

---

### 📝 Card Notes
{{Notes}}
- 
