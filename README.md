## What is this app about?
**Makan Where?** is a list app for people who can never decide what to eat. 🍜

At RP, my friends and I always end up standing outside the food court asking each other "eat what?" for 10 minutes. So I made an app that lists the stalls in each food court and has a gacha machine that picks one for you. You turn it, it decides, you go eat.

### Notable features of the app
- 📋 Stalls are grouped by food court (Lawn, North and South) using a SectionList. The sections are built from one data array with `filter`, `map` and `new Set`, so adding a new stall only takes one line in `Data.js`.
- 🎰 Press TURN! on the gacha machine and it picks a random stall from all the food courts in RP.
- 🔒 Happy with the result? Lock it in so you remember what you got. Changed your mind? Spin again.
- ✏️ Tap any stall to edit its name, food type or food court, add it to your favourites ❤️, or delete it.
- 🎨 The design is styled with StyleSheet and Flexbox. All the colours are in `Colors.js`, so the whole look can be changed from one file.

-----------
### App Demo

<img width="596" height="1350" alt="Makan where" src="https://github.com/user-attachments/assets/7b285df3-2a0e-4b75-b47d-42274b425d99" />


-----------
Video walkthrough of the app:
