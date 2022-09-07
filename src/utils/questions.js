import icon1 from  '@/assets/image/icon1.png';
import icon2 from  '@/assets/image/icon2.png';
import icon3 from  '@/assets/image/icon3.png';
import icon4 from  '@/assets/image/icon4.png';
import icon5 from  '@/assets/image/icon5.png';
export default [
    {
        "title": "What products can I buy?",
        icon:icon1,
        show:false,
        "children": [
            {
                "title": "Which markets can I trade in?",
                show:false,
                "content": "We offer a comprehensive range of FX pairs, precious metals, commodities, and global indices."
            },
            {
                "title": "What leverage do you offer?",
                show:false,
                "content": "Tiger Brokers UK offers up to 30:1 leverage depending on the product being traded. Higher leverage is available for 'Professional' clients. Please contact ________________ to discuss upgrading your account to Professional status."
            },
            {
                "title": "Where can I find the product specifications?",
                show:false,
                "content": "Product specifications are listed in the 'Markets' section of the app. Select a product and open up a trade window. Then click on the '?' icon for detailed product information."
            }
        ]
    },
    {
        "title": "How to open an account?",
        icon:icon2,
        show:false,
        "children": [
            {
                "title": "What types of account are available?",
                show:false,
                "content": "Tiger Brokers offers an Experience account on which to practice trading with virtual funds, and a Live account on which to trade with real funds."
            },
            {
                "title": "How do I open an account?",
                show:false,
                "content": "Please download our app from Google Play or the App Store. Once you have registered, you will be invited to open an Experience or a Live account."
            },
            {
                "title": "How long does it take to open an account?",
                show:false,
                "content": "Demo Account are opened immediately. A Live account will normally be approved within minutes; however, we may request copies of ID to complete the process."
            },
            {
                "title": "What documents do I need to provide?",
                show:false,
                "content": "For UK residents, we do not normally request copies of ID documents. For non-UK residents we may ask you for a copy of your passport, national ID Card or driving licence, and a utility bill or bank statement confirming your address."
            },
            {
                "title": "Why am I being deducted the inactivity fee from my account?",
                show:false,
                "content": "For clients who have registered for more than three months and have not successfully traded or deposited in the past three months, the platform will automatically charge a $10 inactivity fee at 20:00 (GMT+8) on the last day of each month."
            }
        ]
    },
    {
        "title": "How do I deposit or withdraw money?",
        icon:icon3,
        show:false,
        "children": [
            {
                "title": "How do I fund my account?",
                show:false,
                "content": "Please register your bank card details on the app and then manage deposits in the 'Payments' section."
            },
            {
                "title": "What is the minimum deposit?",
                show:false,
                "content": "The minimum deposit is GBP50."
            },
            {
                "title": "How long does it take to transfer funds?",
                show:false,
                "content": "Deposits are usually credited to your account immediately. We process withdrawal requests immediately and expect all funds to be returned within three working days."
            },
            {
                "title": "How do I withdraw funds?",
                show:false,
                "content": "Manage withdrawals in the ‘Payments’ section of the app. You can withdraw funds at any time, although we recommend that you maintain a surplus of margin in your account if you have open positions. Tiger Brokers does not charge clients to make a withdrawal."
            },
            {
                "title": "What is the minimum withdrawal?",
                show:false,
                "content": "The minimum withdrawal is GBP20."
            },
            {
                "title": "What are the restrictions on withdrawal?",
                show:false,
                "content": "Only the approved live accounts can withdraw funds; clients can only withdraw after depositing; Trading behavior is required after depositing; The minimum withdrawal amount is USD30."
            },
            {
                "title": "Are there any withdrawal fees?",
                show:false,
                "content": "Tiger Brokers does not charge any withdrawal fees."
            }
        ]
    },
    {
        "title": "How to manage my order?",
        icon:icon4,
        show:false,
        "children": [
            {
                "title": "What is the minimum order size?",
                show:false,
                "content": "Our minimum order size is 0.01 lot for FX and precious metals, and 0.1 for commodities and indices."
            },
            {
                "title": "What trading fees do you charge?",
                show:false,
                "content": "We do not charge any commission - only spread. Our FX spreads are variable and from 0.6. Overnight swaps and financing adjustments are applied to positions held overnight."
            },
            {
                "title": "When am I able to trade on the platform?",
                show:false,
                "content": "From Sunday 21:05 UTC through to Friday 20:55 UTC."
            },
            {
                "title": "Why was my order closed forcibly? ",
                show:false,
                "content": "When the Trading account, copy account or master account margin level (margin level = Total equity / Margin * 100%) is lower than 20%, the system will activate the liquidation mechanism, and the position will be closed from the order with the largest loss."
            },
            {
                "title": "Is there a time limit on holding a position or limit on the number of orders I can have open at any one time?",
                show:false,
                "content": "There are no time limits on open orders; however, you must maintain sufficient funds to cover margin requirements and swap adjustments."
            },
            {
                "title": "What is slippage and when might it occur?",
                show:false,
                "content": "Slippage occurs when an order is not filled at a specified price, generally because of low liquidity or price gaps."
            }
        ]
    },
    {
        "title": "What is swap and how to check it?",
        show:false,
        icon:icon5,
        "children": [
            {
                "title": "What is a swap?",
                show:false,
                "content": "Swaps reflect the interest and financing adjustments applied to a position held overnight. Swaps adjustments may take the form of a credit or a debit to your account, depending on the position held and the direction of the trade. No swaps are applied to trades opened and closed the same day."
            },
            {
                "title": "When are swap adjustments applied?",
                show:false,
                "content": "Swap rates are calculated at 22:00 UTC and applied to eligible accounts shortly afterwards. If positions are held over a weekend, swap rates will increase to reflect that fact."
            },
            {
                "title": "Where can I check what swap rates you apply for?",
                show:false,
                "content": "Swap details can be found on the product information page of a particular product. Swap rates are normally updated daily and are based on prevailing market rates."
            },
            {
                "title": "Where can I check what swap fees I have paid or received?",
                show:false,
                "content": "Accumulated swap adjustments are detailed in your ‘Trade History’ on the app in the ‘Closed positions’ section."
            }
        ]
    }
]