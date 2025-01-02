const menu = [
  // Sourdough Bread
  {
    category: "Sourdough Bread",
    items: [
      // Sourdough Whole Wheat Country Loaf Bread 650g
      {
        name: "Sourdough Whole Wheat Country Loaf Bread 650g",
        price: 225,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/471531502_1037304728411001_2609502721359815113_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFY9lNeXHnftq6KWv2NRxBYz-ywrzQ3dqvP7LCvNDd2q5HpweEl34y3YYgmurYpbzZ1cTY4Zl1C4Vkwm-mu8HLC&_nc_ohc=pykjytajf2cQ7kNvgGzcvPs&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=ABlHWYvEh99l4KsNqZtOil_&oh=00_AYCDTiC3cYM-LBdJfhzpUpKslknEC6t3-coTQ0WaOsTObg&oe=677C1903",
      },
      // Sourdough White Country Loaf Bread 650g
      {
        name: "Sourdough White Country Loaf Bread 650g",
        price: 185,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/471302285_1033308655477275_864172331327180228_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEl0519_OZ_rrQNwhC7lX8LsJZoptm57sWwlmim2bnuxVrEbiuc1u9j4tnmwLKu7X0VwAK8K1-Kw7GfGBy8f1FS&_nc_ohc=g5rPIJ6dL7AQ7kNvgHK2DDG&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=A78mFri4lgGSatOmgVWTBgo&oh=00_AYBHLxty7oUHxGPBs6NGwRKGfLAa73YY-DsZGhHlziAcZw&oe=677C197D",
      },
      // Sourdough Whole Wheat Country Loaf Bread 450g
      {
        name: "Sourdough Whole Wheat Country Loaf Bread 450g",
        price: 160,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/471159838_1033081898833284_4880043245536386842_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHjrRuj5ME4BaWu52AFk4yphMnOga-PPXSEyc6Br489dCP1JTuIkx2u89cpAHow1nhsh7czJoQIlic6zqZi7mLx&_nc_ohc=PJwOeqSeTZsQ7kNvgEw5ulm&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=A0HAYYxZbYyzUrMwvV331yu&oh=00_AYAKDLjELCi70BUgl56j4CRkrp3nYj19kHBUYCGZcfqTvA&oe=677C0E79",
      },
      // Sourdough White Country Loaf Bread 450g
      {
        name: "Sourdough White Country Loaf Bread 450g",
        price: 125,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t1.15752-9/470057452_1694166224496903_866971227427212823_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE3aXPMOqxGJnPdY1kUEHt9BxlVM80_tooHGVUzzT-2igZX5oI5oBKavs50WUHB3ueYroYey5QEXuU7bchOco_s&_nc_ohc=1U1oLxtZqHcQ7kNvgHdi2xZ&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&oh=03_Q7cD1gG7PGRMSAZyUonDzFXcLUeY1ZH3spWlJIoEGnDmB41TyA&oe=679D998F",
      },
      // Sourdough Whole Wheat Loaf Bread 450g
      {
        name: "Sourdough Whole Wheat Loaf Bread 450g",
        price: 160,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/469359970_1019624176845723_2708965848973317380_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH9Po6nia7DMrD2R2jKhFg8mMyw2tmGk9mYzLDa2YaT2X5UWxoDGIzGuVb0RBYfDnt4o2_sAxXwhUhf1hJewVFH&_nc_ohc=lQ60xAz1kEQQ7kNvgH--EzS&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AuYojR03aEZkkWsJxspm2U2&oh=00_AYAql4g26TIhDJ4mKRr3N_FeIksLqWr5fw_uPWTKZxNUEw&oe=677BF1F2",
      },
      // Sourdough White Loaf Bread 450g
      {
        name: "Sourdough White Loaf Bread 450g",
        price: 125,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/464935229_994959262645548_7155716516908294697_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHOEtV5x8UmpIX9hOoz7ZaACZWptrQHA_gJlam2tAcD-EoEu7ULLdVE_G6RHwdd67AetyI56yCVxR-MDq2Yt1EF&_nc_ohc=BnsjPpMZH_8Q7kNvgEdMmGw&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AOnUxCWQ4H7qyvo6PkA4ibn&oh=00_AYCw88oj-s4adytGjoNUZtGYWpgYXJwGLN-yy2pJFah6xQ&oe=677C2591",
      },
      // Sourdough Baguette
      {
        name: "Sourdough Baguette",
        price: 55,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/420023066_804006518407491_2941920944800449747_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGzXojgctEedi9IcsSeN9JBeDfTvuWJK294N9O-5Ykrb_kB4s4Y_-8uiL7TXOsVtZbPhBGdpquvkn0hLgveEXJo&_nc_ohc=PIYsCgbn0pAQ7kNvgEHM9Xt&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=ABs_nv1VmW5tzTHjyjWI4HY&oh=00_AYBXckV5ESRL6s28_4sdfGEznLFDXqMBFY-oqdip5nh5qg&oe=677C0332",
      },
      // Sourdough French Brioche Loaf Bread
      {
        name: "Sourdough French Brioche Loaf Bread",
        price: 290,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/285465159_2992474501027667_6696653340275144808_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFCU3HvBCd0zATGrMyzsU05cL_GMVk1KB5wv8YxWTUoHjOJLtL5OhPyQALEb24gbouH5W5fz6nf4Tn-scGWMo4T&_nc_ohc=8Wxmd67eDtEQ7kNvgGG6cXz&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=A0j-IeqovIYbHuobMbBsf2d&oh=00_AYDMvwV9SXWJmntdELJfZPvsgbsKbbDq5gYc53eP2sfG1A&oe=677C1744",
      },
      // Sourdough Rosemary Bread
      {
        name: "Sourdough Rosemary Bread",
        price: 85,
        image:
          "https://www.allrecipes.com/thmb/tA0Iu9YtB04cBZil6WQ3PQjx3A8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/767275-2676be8b23bc4712bcf58ba672688744.jpg",
      },
      // Sourdough Sandwich Loaf Bread
      {
        name: "Sourdough Sandwich Loaf Bread",
        price: 175,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/293278497_3022835674658216_1848663451051214475_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHOtiituTmXRA4MQa0q2FV_eSl_GtfS5GZ5KX8a19LkZqxwF1L2EaSzxlXK4R6xlusCBHgKmosU7VEH2qGffWKz&_nc_ohc=opTxhxOcgCQQ7kNvgFEwXDk&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=A3z3ZoDoaTNi0asHM-9jviY&oh=00_AYC_botbzoSH4PlftVfZTCGeQ3qHvnOB5g-AUiS0BCONqg&oe=677BFA57",
      },
      // Sourdough Sandwich Milk Bread
      {
        name: "Sourdough Sandwich Milk Bread",
        price: 230,
        image:
          "https://heartscontentfarmhouse.com/wp-content/uploads/2020/06/milk-and-honey-bread-recipe-card-1024x1024.jpg",
      },
      // Sourdough Loaf Bread
      {
        name: "Sourdough Loaf Bread",
        price: 95,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/278818437_2961888884086229_4632957992489347672_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGdZHJqLWDxVC5_vobG1K1-81Q4Sbpqy37zVDhJumrLXHojrFwZNvBTTFvcbH5YU2WMd7T84hDlsX95mBsaksb&_nc_ohc=7fpkdZ3aj-wQ7kNvgFW7c_I&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AuDLrgjQRu88rGczsPrLKY4&oh=00_AYB_cOI1dZ3bBWFtEzHGTx9axRukzrAuHCm8uT-g4xa1ug&oe=677BFF12",
      },
    ],
  },
  // Sourdough Pizza
  {
    category: "Sourdough Pizza",
    items: [
      // Sourdough Pepperoni Pizza 10" or 12"
      {
        name: "Sourdough Pepperoni Pizza",
        sizes: ['10"', '12"'],
        prices: {
          '10"': 405,
          '12"': 505,
        },
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/280517184_2980952308846553_6723103561625778584_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHzKADP1djZmWurqWB99D7Z58LyqALmZ2rnwvKoAuZnakFNQOSOqnls_Y80d6r-ccR1zwqwFMeLLTjZyTCYgvqO&_nc_ohc=b1sEWPYI67QQ7kNvgHzxRtE&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=A7MJ5JaWmVmW9cJT-nhcUzG&oh=00_AYDOyBfs_LVR-jQvwYvUk9ARW-w56wKVDTDJIhV6GOHmnQ&oe=677C2C01",
      },
      // Sourdough Hawaiian Pizza 10" or 12"
      {
        name: "Sourdough Hawaiian Pizza",
        sizes: ['10"', '12"'],
        prices: {
          '10"': 405,
          '12"': 505,
        },
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/280562636_2980952292179888_422108494525408644_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEbmMyI7getEIaoaT5o4qM37kvwlFXs8cvuS_CUVezxy83xJjoJSxj_rN5KgTcEAq8bozNO9MWgFTBbDgSut-w1&_nc_ohc=8mg0BWeTzEcQ7kNvgGHcFNx&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AH_Vht1RwmJYkuPwWHwxfUy&oh=00_AYDYuSMQiGb7aEPXKxu-GUoAQKFKobsaY0RWU00SvUd4tg&oe=677C251E",
      },
    ],
  },
  // Pizza
  {
    category: "Pizza",
    items: [
      // Pepperoni Pizza 10" or 12"
      {
        name: "Pepperoni Pizza",
        sizes: ['10"', '12"'],
        prices: {
          '10"': 305,
          '12"': 405,
        },
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/247478278_2847879958820456_6572488134553888362_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFnzC48xxOGEOD2H7BTJqXgTGWkEuqiNtRMZaQS6qI21EZ0ifCChkNQ2Ubyaelx24pLW_-NSAso4T-npARsg8HT&_nc_ohc=gkCXa9FKTBsQ7kNvgEPtcma&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=A_fNoZvPPD7vMgxgkYtU-EO&oh=00_AYCb7pDyJ1PbB4WTVaK6R1WmUCxrqq0AnY5Pq7JtcrzJhQ&oe=677C2781",
      },
      // Hawaiian Pizza 10" or 12"
      {
        name: "Hawaiian Pizza",
        sizes: ['10"', '12"'],
        prices: {
          '10"': 405,
          '12"': 505,
        },
        image:
          "https://pizzahutmu.com/wp-content/uploads/2023/06/Hawaiian-Pizza.jpg",
      },
    ],
  },
  // Cinnamon Roll
  {
    category: "Cinnamon Roll",
    items: [
      // Giant Streusels Cinnamon Roll
      {
        name: "Giant Streusels Cinnamon Roll",
        price: 175,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/309390553_482849060523240_5894062310129242383_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFUCrDbnSxa2TJD6N8yzFwDaDLv8lbWjrBoMu_yVtaOsH23urXSqbxMeJrUlRkFpWFV3je4EKgXe-iSSOcdcJy1&_nc_ohc=P-3-L0NrhY0Q7kNvgFPPEJr&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=ApSztiZ6MU9KCvoTKvuVUnQ&oh=00_AYBsXuhWY-j1MT6QGpMDJ6muPUR_bM3maITl4jNxYlz4JQ&oe=677C1316",
      },
      // Streusels Cinnamon Loaf
      {
        name: "Streusels Cinnamon Loaf",
        price: 100,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/309600824_483667457108067_677873299945726018_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHfSp4bAF5m7gnDnbBBbboqJ9nfHeTgaksn2d8d5OBqS-wF4kNHluQuBuLeGFfHKu9NfCL0ENHVTVbguJ71SDML&_nc_ohc=r4sxMdzTwY8Q7kNvgFLsAJj&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AHsU4x2gr2h3BXUI_tRPt0Y&oh=00_AYDwZx8YzkiRgRHVf6pnQBBL2lUFossxIactRFlr1r-asg&oe=677C1132",
      },
      // Streusels Cinnamon Roll
      {
        name: "Streusels Cinnamon Roll",
        price: 30,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/309386143_482934163848063_6443688352125480323_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHfMBuH1Ctekd3pzZt8rAppsT8d7N9MZC6xPx3s30xkLvjT7YeP9zmFW33x97KAlPeCvv6DwDjpeC-067Rd13V7&_nc_ohc=PmNSyNnmAzMQ7kNvgFZBFme&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=ASDPmrcW2vCmWwnvb2yWZYg&oh=00_AYB8g8ToFNJAAF54P6z8l50G52KC4p7zbBNnp9ZFYYAsIQ&oe=677C2AA0",
      },
      // Streusels Cinnamon Roll Box 4 pcs.
      {
        name: "Streusels Cinnamon Roll Box 4 pcs",
        price: 150,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/295406970_3032856670322783_86982584428020608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFG9G3iaWkpU4VYLE2YGrKkTkBnNHBBuslOQGc0cEG6yb_KQ1WEb-zfS7Qhkv4tzAE-foV0MsBeFdV0bRLaJ08g&_nc_ohc=cjrAedeF5gcQ7kNvgFk6vCP&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AUTeqdKA3OtTX1A3W5pMxYG&oh=00_AYDh6-KUrCXSpZCdyGWSpSyPQp7alNlBnmgKWAFqsBZw5Q&oe=677C0E9F",
      },
    ],
  },
  // Brownies/Cookies/Crinkles
  {
    category: "Brownies/Cookies/Crinkles",
    items: [
      // Brownies Box 12 pcs.
      {
        name: "Brownies Box 12 pcs",
        price: 175,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t1.6435-9/39303892_2018392528435874_3196229831784136704_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHNJHNix_Ql0Hp3H5oQJstLkY5BeehJIKiRjkF56EkgqAEj7NDppSeI8RQHawGSaxncP3WdS4O8Xxd3TU89eagN&_nc_ohc=XXm64uSJLgkQ7kNvgFSAmPN&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=Aj5ECSIgun6FkL0k3YdQULV&oh=00_AYB2zfuq6e03zA0elSIc27bdBTHEPy9m_dKpgqsYO1YxnQ&oe=679DCC75",
      },
      // Brownies Box 6 pcs.
      {
        name: "Cookies Tub 15 pcs",
        price: 175,
        image:
          "https://images.albertsons-media.com/is/image/ABS/970113103?$ng-ecom-pdp-desktop$&defaultImage=Not_Available",
      },
      // Crinkles Tub 12 pcs.
      {
        name: "Crinkles Tub 12 pcs",
        price: 85,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/274648301_2924650251143426_2696382688904634886_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF-7dN0cTNHi0UI9kxhFCBt77pyo4r2o0_vunKjivajT0pvW-WW0XWs0mvBFJmbQf3yfc6jzq0ChZZWrWOdlRmR&_nc_ohc=OTTCEEdgWLYQ7kNvgEPT9z_&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=ALLOfU-JZv4fFJjIAX2hdYO&oh=00_AYD93obSzM-PyVNepgg6X3vg6zF2lqtxaY1Zwcy76Uu7CA&oe=677C1B3D",
      },
    ],
  },
  // Pies
  {
    category: "Pies",
    items: [
      {
        name: "Egg Pie",
        price: 210,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/244528620_2840547699553682_8912326759019211999_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGc9LitIUfYCrDh5EvbQcpeyCcLesTptBrIJwt6xOm0GgRBcSe3Vid4Ebb_OXuZkT2_71xmpwu3Oafjmagw37qk&_nc_ohc=Mqvdie0qrEMQ7kNvgEeqgC8&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AyDekgfyCNgSwMqc9TiVuTg&oh=00_AYAXfXx8PvQZergiJHn71iFdZFLfhVKcpG0mY6ig0uJF_g&oe=677C0DF1",
      },
      {
        name: "Ube Pie",
        price: 230,
        image:
          "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/248447164_2840546929553759_8379051505972750604_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFiWbHJsXTpPQ4GKzJDF5vv8_0xlc7PfnPz_TGVzs9-c2ZdzSgfbZbfBR7xHpJ3-Z8Z8h2TLGk7XVM7VyXzVCkX&_nc_ohc=bHvUtVEEbQ0Q7kNvgFnxgTU&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AjjZyvwSP3nnYkpmhh39WKT&oh=00_AYB41XDspteZ62QNkueMk9drstjpArKLJ0fA6e3tVYE-ag&oe=677BFDC7",
      },
      {
        name: "Buko Pie",
        price: "Soon",
        image:
          "https://simplybakings.com/wp-content/uploads/2020/10/buko-pie.png",
      },
      {
        name: "Buko Pineapple Pie",
        price: "Soon",
        image:
          "https://i.pinimg.com/736x/b8/78/b7/b878b70929535758847c28f4ce764fd7.jpg",
      },
    ],
  },
  // Hot Coffee
  {
    category: "Hot Coffee",
    items: [
      // Americano
      {
        name: "Americano",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 75,
          "16oz": 95,
        },
        image:
          "https://assets.beanbox.com/blog_images/AB7ud4YSE6nmOX0iGlgA.jpeg",
      },
      // Latte
      {
        name: "Latte",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 85,
          "16oz": 105,
        },
        image:
          "https://st2.depositphotos.com/5355656/7824/i/950/depositphotos_78249960-stock-photo-hot-cafe-latte-and-coffee.jpg",
      },
      // Caramel Latte
      {
        name: "Caramel Latte",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 105,
          "16oz": 125,
        },
        image:
          "https://www.chilitochoc.com/wp-content/uploads/2022/12/homemade-caramel-latte-ft.jpg",
      },
      // Salted Caramel Latte
      {
        name: "Salted Caramel Latte",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 110,
          "16oz": 125,
        },
        image:
          "https://coffeeatthree.com/wp-content/uploads/salted-caramel-latte-4.jpg",
      },
      // Cappuccino
      {
        name: "Cappuccino",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 85,
          "16oz": 105,
        },
        image:
          "https://img.freepik.com/premium-photo/hot-cappuccino-coffee_758367-5219.jpg",
      },
      // Caramel Cappuccino
      {
        name: "Caramel Cappuccino",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 105,
          "16oz": 125,
        },
        image: "https://www.alisonspantry.com/uploads/new-products/1329-2.jpg",
      },
      // Salted Caramel Cappuccino
      {
        name: "Salted Caramel Cappuccino",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 110,
          "16oz": 125,
        },
        image:
          "https://www.halfbakedharvest.com/wp-content/uploads/2020/12/Salted-Caramel-Brulee-Latte-1-500x500.jpg",
      },
      // Macchiato
      {
        name: "Macchiato",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 85,
          "16oz": 105,
        },
        image:
          "https://thelittlestcrumb.com/wp-content/uploads/salted-caramel-macchiato-6.jpg",
      },
      // Caramel Macchiato
      {
        name: "Caramel Macchiato",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 105,
          "16oz": 125,
        },
        image:
          "https://www.fifteenspatulas.com/wp-content/uploads/2012/03/Caramel-Macchiato-Fifteen-Spatulas-2.jpg",
      },
      // Salted Caramel Macchiato
      {
        name: "Salted Caramel Macchiato",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 110,
          "16oz": 125,
        },
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmoP1bDysK3KKg5RV3pg8dRfTqrj5GBNs8on1AtLrhkxccs580qpUcvmLVg6fRrErs5s&usqp=CAU",
      },
      // Chocolate
      {
        name: "Hot Chocolate",
        sizes: ["Single", "Double"],
        prices: {
          Single: 20,
          Double: 30,
        },
        image:
          "https://images.getrecipekit.com/20230327191313-Kettle_HotChoco.jpg?width=650&quality=90&",
      },
      // Espresso
      {
        name: "Espresso",
        sizes: ["Single", "Double"],
        prices: {
          Single: 20,
          Double: 30,
        },
        image:
          "https://naivo.in/wp-content/uploads/2024/08/What-Is-Blonde-Espresso-And-How-Do-You-Make-It.webp",
      },
      // Café Freddo
      {
        name: "Café Freddo",
        sizes: ["Single", "Double"],
        prices: {
          Single: 25,
          Double: 35,
        },
        image:
          "https://cdn.tasteatlas.com/images/ingredients/f335bef658424bf7b3998f568df9869a.jpg?w=600",
      },
    ],
  },
  // Additional Category: Other
  {
    category: "Other",
    items: [
      // Kapeng Barako
      {
        name: "Kapeng Barako",
        sizes: ["12oz", "16oz"],
        prices: {
          "12oz": 25,
          "16oz": 35,
        },
        image:
          "https://img.freepik.com/premium-photo/coffee-cup-black-cup-black-coffee-isolated-white-background-with-clipping-path_158502-178.jpg",
      },
      // Mineral Water 350 ml.
      {
        name: "Mineral Water 350 ml",
        sizes: ["Single"],
        prices: {
          Single: 10,
        },
        image:
          "https://foodtray2go.com/wp-content/uploads/2021/10/Screen-Shot-2021-10-13-at-11.07.12-AM.png",
      },
    ],
  },
  // Iced Coffee
  {
    category: "Iced Coffee",
    items: [
      // Iced Americano
      {
        name: "Americano",
        sizes: ["16oz", "22oz"],
        prices: {
          "16oz": 95,
          "22oz": 115,
        },
        image:
          "https://diethood.com/wp-content/uploads/2023/08/iced-americano-7-1.jpg",
      },
      // Iced Latte
      {
        name: "Latte",
        sizes: ["16oz", "22oz"],
        prices: {
          "16oz": 105,
          "22oz": 125,
        },
        image:
          "https://www.pumpkinnspice.com/wp-content/uploads/2022/07/IMG_1386.jpg",
      },
      // Caramel Latte
      {
        name: "Caramel Latte",
        sizes: ["16oz", "22oz"],
        prices: {
          "16oz": 125,
          "22oz": 140,
        },
        image:
          "https://coffeecopycat.com/wp-content/uploads/2024/01/CaramelLatte-1200x1200-1.jpg",
      },
      // Salted Caramel Latte
      {
        name: "Salted Caramel Latte",
        sizes: ["16oz", "22oz"],
        prices: {
          "16oz": 125,
          "22oz": 140,
        },
        image:
          "https://www.splenda.com/wp-content/uploads/2023/09/Iced-Salted-Caramel-Latte-thumbnail-7453.jpg",
      },
      // Iced Cappuccino
      {
        name: "Cappuccino",
        sizes: ["16oz", "22oz"],
        prices: {
          "16oz": 105,
          "22oz": 125,
        },
        image:
          "https://www.mangiabedda.com/wp-content/uploads/2023/05/IMG_1380-2-scaled.jpg",
      },
      // Caramel Cappuccino
      {
        name: "Caramel Cappuccino",
        sizes: ["16oz", "22oz"],
        prices: {
          "16oz": 125,
          "22oz": 140,
        },
        image:
          "https://www.forkinthekitchen.com/wp-content/uploads/2022/09/220629.iced_.latte_.caramel-9182.jpg",
      },
      // Salted Caramel Cappuccino
      {
        name: "Salted Caramel Cappuccino",
        sizes: ["16oz", "22oz"],
        prices: {
          "16oz": 125,
          "22oz": 140,
        },
        image:
          "https://www.nescafe.com/mena/sites/default/files/2023-04/RecipeHero_SaltedCaramelLatte_1066x1066.jpg",
      },
      // Mocha
      {
        name: "Mocha",
        sizes: ["16oz", "22oz"],
        prices: {
          "16oz": 135,
          "22oz": 150,
        },
        image:
          "https://vibrantlygfree.com/wp-content/uploads/2023/07/iced-mocha-1.jpg",
      },
      // Freddo Cappuccino
      {
        name: "Freddo Cappuccino",
        sizes: ["16oz", "22oz"],
        prices: {
          "16oz": 100,
          "22oz": 120,
        },
        image:
          "https://www.thehungrybites.com/wp-content/uploads/2023/07/freddo-cappuccino-tall-glass.jpg",
      },
      // Dulce Iced Coffee
      {
        name: "Dulce Iced Coffee",
        sizes: ["16oz", "22oz"],
        prices: {
          "16oz": 115,
          "22oz": 140,
        },
        image:
          "https://savingdollarsandsense.com/wp-content/uploads/2014/05/iced-cinnamon-dolce-latte-scaled.jpg",
      },
      // Iced Chocolate
      {
        name: "Iced Chocolate",
        sizes: ["16oz"],
        prices: {
          "16oz": 100,
        },
        image:
          "https://thetiggle.com/wp-content/uploads/2023/04/DSC_8141-min-819x1024.jpg",
      },
    ],
  },
];

export default menu;
