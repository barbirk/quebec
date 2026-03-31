/**
 * QUÉBEC 1905 – DATA & CONTENT
 * All lesson content, quiz questions, and glossary terms
 * Sourced from textbook scans IMG_0912–IMG_0922
 */

const APP_DATA = {

  /* ══════════════════════════════════════════════
     LESSONS (6 dossiers)
  ══════════════════════════════════════════════ */
  lessons: [
    {
      id: 'l1',
      dossier: 'Dossier 15',
      icon: '🗺️',
      color: '#4a9eff',
      xp: 15,
      title: {
        fr: 'Le Québec vers 1905 – Le territoire',
        en: 'Quebec around 1905 – The Territory'
      },
      subtitle: {
        fr: 'La population et la colonisation',
        en: 'Population and Colonization'
      },
      sections: [
        {
          title: { fr: 'Le Québec en 1905', en: 'Quebec in 1905' },
          cards: [
            {
              type: 'info',
              icon: '📊',
              title: { fr: 'La population grandit', en: 'A Growing Population' },
              content: {
                fr: 'Au début du 20e siècle, la population du Québec augmente rapidement. En 1901, environ 1,6 million de personnes habitent au Québec. Les villes et les campagnes accueillent chacune leur part de cette population en croissance.',
                en: 'At the start of the 20th century, Quebec\'s population was growing rapidly. In 1901, around 1.6 million people lived in Quebec. Both cities and rural areas were seeing their share of this growth.'
              }
            },
            {
              type: 'fact',
              emoji: '🏙️',
              content: {
                fr: 'En 1901, seulement <strong>40 % des habitants</strong> du Québec vivaient en ville. Les 60 % restants habitaient à la campagne. Mais les villes grandissent à toute vitesse!',
                en: 'In 1901, only <strong>40% of Quebec\'s population</strong> lived in cities. The other 60% lived in the countryside. But cities were growing fast!'
              }
            },
            {
              type: 'info',
              variant: 'highlight',
              icon: '🏙️',
              title: { fr: 'Montréal, la grande ville', en: 'Montreal, the Big City' },
              content: {
                fr: 'Montréal est de loin la plus grande ville du Québec vers 1905. Elle attire des ouvriers, des commerçants et des immigrants venus du monde entier. Un tramway électrique circule déjà dans ses rues depuis 1892!',
                en: 'Montreal was by far Quebec\'s largest city around 1905. It attracted workers, merchants, and immigrants from all over the world. An electric streetcar had already been running through its streets since 1892!'
              }
            }
          ]
        },
        {
          title: { fr: 'La colonisation de nouveaux territoires', en: 'Colonizing New Lands' },
          cards: [
            {
              type: 'info',
              icon: '🌲',
              title: { fr: 'Vers les nouvelles régions', en: 'Heading to New Regions' },
              content: {
                fr: 'Les terres fertiles près du Saint-Laurent sont déjà toutes occupées. Les habitants qui n\'ont pas de terre se dirigent vers des nouvelles régions de colonisation : les Laurentides, le Lac-Saint-Jean et l\'Abitibi-Témiscamingue.',
                en: 'The fertile land near the St. Lawrence River was already fully occupied. Families without land headed toward new colonization regions: the Laurentians, Lac-Saint-Jean, and Abitibi-Témiscamingue.'
              }
            },
            {
              type: 'fact',
              emoji: '⛪',
              content: {
                fr: 'Antoine Labelle, curé et sous-ministre, s\'engage à développer plusieurs nouvelles paroisses dans la région des Laurentides pour encourager la colonisation.',
                en: 'Antoine Labelle, a priest and deputy minister, worked to establish new parishes in the Laurentians to encourage colonization.'
              }
            },
            {
              type: 'info',
              icon: '⛏️',
              variant: 'highlight',
              title: { fr: 'Thetford Mines et Valleyfield', en: 'Thetford Mines and Valleyfield' },
              content: {
                fr: 'Certaines villes se développent grâce aux industries. Thetford Mines possède beaucoup de minerai (amiante). Valleyfield devient une ville industrielle spécialisée dans le textile. Honoré Mercier, premier ministre, développe les chemins de fer pour faciliter les déplacements.',
                en: 'Some towns grew thanks to industry. Thetford Mines had rich mineral deposits (asbestos). Valleyfield became an industrial city known for its textile production. Premier Honoré Mercier expanded the railway to connect these communities.'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'l2',
      dossier: 'Dossier 16',
      icon: '🏙️',
      color: '#ffa53e',
      xp: 15,
      title: {
        fr: 'La vie quotidienne en ville',
        en: 'Daily Life in the City'
      },
      subtitle: {
        fr: 'Le développement urbain vers 1905',
        en: 'Urban development around 1905'
      },
      sections: [
        {
          title: { fr: 'Les nouvelles technologies en ville', en: 'New Technology in the City' },
          cards: [
            {
              type: 'fact',
              emoji: '⚡',
              content: {
                fr: 'Vers 1905, les grandes villes du Québec reçoivent l\'<strong>électricité</strong>. Elle change complètement la façon de vivre : on s\'éclaire la nuit, on utilise des tramways électriques, et certains foyers ont des appareils électriques!',
                en: '<strong>Electricity</strong> arrived in Quebec\'s major cities around 1905. It transformed daily life: people had electric lighting, electric streetcars ran through the streets, and some homes even had electrical appliances!'
              }
            },
            {
              type: 'info',
              icon: '🚃',
              variant: 'highlight',
              title: { fr: 'Le tramway électrique', en: 'The Electric Streetcar' },
              content: {
                fr: 'Le tramway est le principal moyen de transport en commun vers 1905. Il roule grâce à des câbles électriques. Des milliers d\'ouvriers et de bourgeois l\'utilisent chaque jour pour se rendre au travail, au marché ou à l\'église.',
                en: 'The streetcar was the main form of public transportation around 1905. It ran on electric cables. Thousands of workers and wealthy citizens used it daily to get to work, the market, or church.'
              }
            },
            {
              type: 'info',
              icon: '🚗',
              title: { fr: 'La première automobile à Montréal', en: 'The First Automobile in Montreal' },
              content: {
                fr: 'Le <strong>21 novembre 1899</strong>, la première automobile fait son apparition dans les rues de Montréal. Elle appartient à Ucal-Henri Dandurand. Cette première voiture fonctionne à la vapeur. Malgré cela, les chevaux restent encore très présents dans les rues!',
                en: 'On <strong>November 21, 1899</strong>, the first automobile appeared on Montreal\'s streets. It belonged to Ucal-Henri Dandurand and ran on steam power. Despite this new invention, horse-drawn vehicles remained a common sight in the city!'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'l3',
      dossier: 'Dossier 16',
      icon: '🏘️',
      color: '#9c6fff',
      xp: 20,
      title: {
        fr: 'Les quartiers de la ville',
        en: 'City Neighborhoods'
      },
      subtitle: {
        fr: 'Ouvriers et bourgeois : deux mondes différents',
        en: 'Workers and the wealthy: two different worlds'
      },
      sections: [
        {
          title: { fr: 'Les quartiers ouvriers', en: 'Working-Class Neighborhoods' },
          cards: [
            {
              type: 'comparison',
              left: {
                label: { fr: '👷 Quartiers ouvriers', en: '👷 Working-Class Areas' },
                variant: 'red',
                items: {
                  fr: ['Petites maisons mal entretenues', 'Pas de toilettes ni d\'eau courante', 'Pas d\'électricité ni de chauffage central', 'Proches des usines et de leurs fumées', 'Journées de 10h, 6 jours par semaine', 'Alimentation : pain, lard salé, fèves, œufs'],
                  en: ['Small, poorly maintained homes', 'No indoor toilets or running water', 'No electricity or central heating', 'Located near noisy, smoky factories', '10-hour workdays, 6 days a week', 'Diet: bread, salt pork, beans, eggs']
                }
              },
              right: {
                label: { fr: '🎩 Quartiers bourgeois', en: '🎩 Wealthy Neighborhoods' },
                variant: 'blue',
                items: {
                  fr: ['Grandes maisons avec plusieurs pièces', 'Eau courante et toilettes intérieures', 'Électricité et chauffage central', 'Quartiers calmes et verdoyants', 'Domestiques à la maison', 'Alimentation variée : poulet, agneau, fromage, fruits, desserts'],
                  en: ['Large homes with many rooms', 'Running water and indoor plumbing', 'Electricity and central heating', 'Quiet, tree-lined neighborhoods', 'Domestic servants in the home', 'Varied diet: chicken, lamb, cheese, fruits, and desserts']
                }
              }
            }
          ]
        },
        {
          title: { fr: 'Les syndicats ouvriers', en: 'Labor Unions' },
          cards: [
            {
              type: 'info',
              icon: '✊',
              title: { fr: 'Les ouvriers s\'organisent', en: 'Workers Unite' },
              content: {
                fr: 'Les conditions de travail sont très difficiles pour les ouvriers : salaires bas, longues journées, dangers dans les usines. Pour améliorer leur situation, les ouvriers se regroupent en <strong>syndicats</strong>. Ces organisations font pression sur les employeurs pour obtenir de meilleures conditions.',
                en: 'Working conditions were very tough: low wages, long hours, and dangerous factories. To improve their situation, workers organized into <strong>labor unions</strong>. These organizations put pressure on employers to achieve better working conditions.'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'l4',
      dossier: 'Dossier 17',
      icon: '🌾',
      color: '#4caf93',
      xp: 15,
      title: {
        fr: 'La vie à la campagne – Le village',
        en: 'Rural Life – The Village'
      },
      subtitle: {
        fr: 'Comment vivaient les habitants des campagnes',
        en: 'Life in Quebec\'s countryside'
      },
      sections: [
        {
          title: { fr: 'Le village rural', en: 'The Rural Village' },
          cards: [
            {
              type: 'info',
              icon: '⛪',
              title: { fr: 'L\'église : cœur du village', en: 'The Church: Heart of the Village' },
              content: {
                fr: 'L\'église est située au centre du village. C\'est le principal lieu de rassemblement. Les habitants se retrouvent à l\'église tous les dimanches. Le curé (prêtre) est souvent la personne la plus influente du village.',
                en: 'The church stood at the heart of every village. It was the main gathering place, and people came together there every Sunday. The parish priest was often the most influential person in the community.'
              }
            },
            {
              type: 'info',
              icon: '🛒',
              variant: 'highlight',
              title: { fr: 'Le magasin général', en: 'The General Store' },
              content: {
                fr: 'Le magasin général vend de tout : nourriture, vêtements, outils et fournitures. On peut aussi commander des produits qui viennent de grandes villes grâce à des catalogues. Le célèbre catalogue Eaton (1905) permet aux gens de la campagne de commander des produits sans se déplacer en ville!',
                en: 'The general store sold everything: food, clothing, tools, and supplies. People could also order products from big cities using mail-order catalogs. The famous Eaton\'s catalogue (1905) let rural families order goods without ever having to travel to the city!'
              }
            },
            {
              type: 'info',
              icon: '🚂',
              title: { fr: 'Le train connecte les villages', en: 'The Train Connects Communities' },
              content: {
                fr: 'Le chemin de fer (train) est très important pour les villages en 1905. Il permet de transporter les marchandises et les personnes entre les villages et les villes. Le train amène aussi du courrier et des journaux.',
                en: 'The railway was crucial for rural communities in 1905. It transported goods and people between villages and cities, and also brought mail and newspapers to remote areas.'
              }
            }
          ]
        },
        {
          title: { fr: 'Les services du village', en: 'Village Services' },
          cards: [
            {
              type: 'info',
              icon: '🎒',
              title: { fr: 'L\'école de rang', en: 'The One-Room Schoolhouse' },
              content: {
                fr: 'Les enfants à la campagne vont à l\'<strong>école de rang</strong>. C\'est une petite école avec une seule salle pour tous les élèves de différents âges. Une institutrice enseigne à tous en même temps. Les enfants y apprennent à lire, écrire et calculer.',
                en: 'Children in the countryside attended a <strong>one-room schoolhouse</strong> where students of all ages were taught together by a single teacher. Children learned to read, write, and do arithmetic.'
              }
            },
            {
              type: 'fact',
              emoji: '👨‍⚕️',
              content: {
                fr: 'Il y a peu de médecins à la campagne. Le médecin de campagne parcourt <strong>plusieurs kilomètres</strong> en voiture à cheval pour soigner les malades chez eux. C\'est un voyage long et fatigant, surtout en hiver!',
                en: 'Rural areas had very few doctors. A country doctor traveled <strong>many kilometers</strong> by horse-drawn carriage to treat patients at home — a long and exhausting journey, especially in winter!'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'l5',
      dossier: 'Dossier 17',
      icon: '🍂',
      color: '#ff6b6b',
      xp: 15,
      title: {
        fr: 'Les activités à la campagne',
        en: 'Daily Activities in the Countryside'
      },
      subtitle: {
        fr: 'Les saisons rythment la vie des habitants',
        en: 'The seasons shaped life in rural Quebec'
      },
      sections: [
        {
          title: { fr: 'Des activités liées aux saisons', en: 'Seasonal Activities' },
          cards: [
            {
              type: 'info',
              icon: '🍁',
              title: { fr: 'La vie suit les saisons', en: 'Life Follows the Seasons' },
              content: {
                fr: 'À la campagne, les activités quotidiennes sont liées aux saisons. Elles ont peu changé depuis 1820! Au printemps et en été, les habitants sèment dans les champs et jardinent. À l\'automne, c\'est le temps des récoltes. Les habitants produisent presque toute leur nourriture eux-mêmes.',
                en: 'Life in the countryside revolved around the seasons, much as it had since 1820. In spring and summer, families planted crops. In autumn came the harvest. Rural families grew nearly all their own food.'
              }
            },
            {
              type: 'info',
              icon: '🌾',
              variant: 'success',
              title: { fr: 'La nourriture à la campagne', en: 'Food in the Countryside' },
              content: {
                fr: 'Les habitants de la campagne cultivent la plupart de leurs aliments. Ils achètent au magasin général des produits comme la farine, le thé, le sel et le sucre. Les familles élèvent souvent des animaux (poules, vaches, porcs) pour avoir des œufs, du lait et de la viande.',
                en: 'Rural families grew most of their own food, buying only staples like flour, tea, salt, and sugar from the general store. Many families raised animals — chickens, cows, and pigs — for eggs, milk, and meat.'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'l6',
      dossier: 'Dossier 17',
      icon: '🪓',
      color: '#ffd700',
      xp: 20,
      title: {
        fr: 'La vie des colons et des bûcherons',
        en: 'Settlers and Lumberjacks'
      },
      subtitle: {
        fr: 'Coloniser les nouvelles terres et travailler en forêt',
        en: 'Opening new land and working in the forests'
      },
      sections: [
        {
          title: { fr: 'La vie des colons', en: 'Life as a Settler' },
          cards: [
            {
              type: 'info',
              icon: '🌲',
              title: { fr: 'S\'installer sur une nouvelle terre', en: 'Starting Fresh on New Land' },
              content: {
                fr: 'Certains Canadiens français partent s\'installer sur de nouvelles terres en régions de colonisation. La vie est très difficile. À leur arrivée, les colons doivent d\'abord vivre dans des campements temporaires. Ils doivent ensuite défricher la terre (enlever les arbres et les souches), construire leur maison et une grange, puis cultiver la terre.',
                en: 'Some French Canadians left to settle on new lands in colonization regions. Life was extremely tough. When they first arrived, settlers lived in temporary camps. They then had to clear the land (cutting trees and removing stumps), build a house and barn, and finally start farming.'
              }
            },
            {
              type: 'fact',
              emoji: '🏚️',
              content: {
                fr: 'Défricher la terre, c\'est un travail très exigeant! Les colons doivent enlever les arbres, les branches et les souches pour préparer la terre à l\'agriculture. C\'est parfois peu propice parce que le sol n\'est pas toujours fertile.',
                en: 'Clearing land was an exhausting task! Settlers had to remove trees, branches, and stumps to prepare the soil for farming — and they sometimes discovered the land was not very fertile after all that work.'
              }
            }
          ]
        },
        {
          title: { fr: 'La vie dans les chantiers forestiers', en: 'Life in the Logging Camps' },
          cards: [
            {
              type: 'info',
              icon: '🪓',
              variant: 'warning',
              title: { fr: 'Les bûcherons en forêt', en: 'Lumberjacks in the Forest' },
              content: {
                fr: 'En hiver, de nombreux agriculteurs complètent leurs revenus en travaillant dans des <strong>chantiers forestiers</strong>. Au printemps, certains deviennent des <strong>draveurs</strong> qui descendent les billots de bois sur les rivières. Dans les chantiers, les hommes travaillent du matin au soir : ils coupent les arbres, enlèvent les branches et découpent le tronc en billots.',
                en: 'During winter, many farmers supplemented their income by working in <strong>logging camps</strong>. In spring, some became <strong>log drivers</strong>, guiding logs down rivers to the sawmill. In camp, men worked from dawn to dusk: cutting trees, removing branches, and splitting trunks into logs.'
              }
            },
            {
              type: 'info',
              icon: '❄️',
              title: { fr: 'Les conditions difficiles', en: 'Harsh Conditions' },
              content: {
                fr: 'La vie dans les chantiers est très dure. Les bains sont rares, les maladies se transmettent facilement entre les hommes. Les lits sont superposés en bois, serrés les uns contre les autres. Il fait souvent très froid — certains se réveillent avec du givre sur la moustache! Si un homme se blesse, il faut faire venir le médecin de loin.',
                en: 'Life in logging camps was grueling. Bathing was rare, diseases spread quickly in the crowded conditions. Men slept in stacked wooden bunks packed tightly together. It was often bitterly cold — some men woke up with frost on their mustaches! If anyone was injured, a doctor had to be summoned from far away.'
              }
            }
          ]
        }
      ]
    }
  ],

  /* ══════════════════════════════════════════════
     QUIZZES
  ══════════════════════════════════════════════ */
  quizzes: [
    {
      id: 'q1',
      icon: '🏙️',
      title: { fr: 'La vie en ville', en: 'City Life' },
      desc: { fr: '10 questions sur les villes', en: '10 questions about city life' },
      xp: 20,
      type: 'mcq',
      questions: [
        {
          q: { fr: 'Quelle est la plus grande ville du Québec vers 1905?', en: 'What was Quebec\'s largest city around 1905?' },
          icon: '🏙️',
          choices: {
            fr: ['Montréal', 'Québec', 'Sherbrooke', 'Trois-Rivières'],
            en: ['Montreal', 'Quebec City', 'Sherbrooke', 'Trois-Rivières']
          },
          correct: 0,
          explanation: { fr: 'Montréal est de loin la plus grande ville du Québec vers 1905.', en: 'Montreal was by far the largest city in Quebec around 1905.' }
        },
        {
          q: { fr: 'Quelle date marque l\'arrivée de la première automobile à Montréal?', en: 'When did the first automobile appear in Montreal?' },
          icon: '🚗',
          choices: {
            fr: ['21 novembre 1899', '1er janvier 1900', '15 mars 1895', '4 juillet 1901'],
            en: ['November 21, 1899', 'January 1, 1900', 'March 15, 1895', 'July 4, 1901']
          },
          correct: 0,
          explanation: { fr: 'La première automobile est apparue à Montréal le 21 novembre 1899. Elle appartenait à Ucal-Henri Dandurand.', en: 'The first automobile appeared in Montreal on November 21, 1899. It belonged to Ucal-Henri Dandurand.' }
        },
        {
          q: { fr: 'Comment fonctionnait le tramway vers 1905?', en: 'How did the streetcar work around 1905?' },
          icon: '🚃',
          choices: {
            fr: ['Grâce à des câbles électriques', 'Tiré par des chevaux', 'À la vapeur', 'Au gaz naturel'],
            en: ['Using electric cables', 'Pulled by horses', 'With steam power', 'Powered by natural gas']
          },
          correct: 0,
          explanation: { fr: 'Le tramway roulait grâce à des câbles électriques. Montréal avait déjà un tramway électrique depuis 1892!', en: 'The streetcar ran on electric cables. Montreal already had an electric streetcar system since 1892!' }
        },
        {
          q: { fr: 'Que font les ouvriers pour améliorer leurs conditions de travail?', en: 'What did workers do to improve their working conditions?' },
          icon: '✊',
          choices: {
            fr: ['Ils forment des syndicats', 'Ils quittent la ville', 'Ils achètent des usines', 'Ils travaillent plus longtemps'],
            en: ['They formed labor unions', 'They left the city', 'They bought factories', 'They worked longer hours']
          },
          correct: 0,
          explanation: { fr: 'Les ouvriers forment des syndicats pour faire pression sur les employeurs et obtenir de meilleures conditions.', en: 'Workers formed labor unions to put pressure on employers and win better working conditions.' }
        },
        {
          q: { fr: 'Combien d\'heures par jour travaillent les ouvriers vers 1905?', en: 'How many hours a day did factory workers work around 1905?' },
          icon: '⏰',
          choices: {
            fr: ['10 heures', '8 heures', '6 heures', '12 heures'],
            en: ['10 hours', '8 hours', '6 hours', '12 hours']
          },
          correct: 0,
          explanation: { fr: 'Les ouvriers travaillaient environ 10 heures par jour, 6 jours par semaine!', en: 'Factory workers worked around 10 hours a day, 6 days a week!' }
        },
        {
          q: { fr: 'Que mangent principalement les ouvriers vers 1905?', en: 'What did working-class families mainly eat around 1905?' },
          icon: '🍞',
          choices: {
            fr: ['Du pain, du lard salé et des fèves', 'Du poulet et des fruits exotiques', 'Du fromage et du vin', 'Des gâteaux et des bonbons'],
            en: ['Bread, salt pork, and beans', 'Chicken and exotic fruits', 'Cheese and wine', 'Cakes and sweets']
          },
          correct: 0,
          explanation: { fr: 'Les ouvriers avaient une alimentation simple : pain, lard salé, fèves et œufs. Les bourgeois, eux, mangeaient du poulet, de l\'agneau, des fruits et des desserts.', en: 'Working-class families ate simple food: bread, salt pork, beans, and eggs. Wealthy families enjoyed chicken, lamb, fruit, and desserts.' }
        },
        {
          q: { fr: 'Quel pourcentage de la population vit en ville vers 1905?', en: 'What percentage of Quebec\'s population lived in cities around 1905?' },
          icon: '📊',
          choices: {
            fr: ['40 %', '60 %', '75 %', '20 %'],
            en: ['40%', '60%', '75%', '20%']
          },
          correct: 0,
          explanation: { fr: '40 % des habitants vivaient en ville vers 1905, et 60 % à la campagne.', en: '40% of the population lived in cities around 1905, while 60% lived in the countryside.' }
        },
        {
          q: { fr: 'Qu\'est-ce que les quartiers bourgeois ont que les quartiers ouvriers n\'ont pas?', en: 'What did wealthy neighborhoods have that working-class areas lacked?' },
          icon: '🏠',
          choices: {
            fr: ['De l\'eau courante et de l\'électricité', 'Des usines', 'Des tramways', 'Des fermes'],
            en: ['Running water and electricity', 'Factories', 'Streetcar lines', 'Farms']
          },
          correct: 0,
          explanation: { fr: 'Les quartiers bourgeois avaient l\'eau courante, les toilettes intérieures et l\'électricité. Les quartiers ouvriers en étaient souvent dépourvus.', en: 'Wealthy neighborhoods had running water, indoor plumbing, and electricity — things that working-class neighborhoods often lacked.' }
        },
        {
          q: { fr: 'Comment fonctionne la première automobile de Montréal en 1899?', en: 'How did Montreal\'s first automobile run in 1899?' },
          icon: '🚗',
          choices: {
            fr: ['À la vapeur', 'À l\'essence', 'À l\'électricité', 'À l\'huile'],
            en: ['On steam power', 'On gasoline', 'On electricity', 'On oil']
          },
          correct: 0,
          explanation: { fr: 'La première automobile à Montréal fonctionnait à la vapeur. Les voitures à essence sont venues plus tard.', en: 'The first automobile in Montreal ran on steam power. Gasoline-powered cars came later.' }
        },
        {
          q: { fr: 'Quelle inventions technique transforme les villes vers 1905?', en: 'Which technical invention transformed Quebec cities around 1905?' },
          icon: '⚡',
          choices: {
            fr: ['L\'électricité', 'La vapeur', 'Le charbon', 'Le pétrole'],
            en: ['Electricity', 'Steam power', 'Coal', 'Oil']
          },
          correct: 0,
          explanation: { fr: 'L\'électricité transforme la vie en ville : éclairage, tramways, et quelques appareils dans les maisons!', en: 'Electricity transformed city life: lighting, streetcars, and even some household appliances!' }
        }
      ]
    },
    {
      id: 'q2',
      icon: '🌾',
      title: { fr: 'La vie à la campagne', en: 'Rural Life' },
      desc: { fr: '8 questions sur la campagne', en: '8 questions about rural life' },
      xp: 20,
      type: 'mcq',
      questions: [
        {
          q: { fr: 'Qu\'est-ce que l\'école de rang?', en: 'What was a "école de rang"?' },
          icon: '🎒',
          choices: {
            fr: ['Une école avec une seule salle pour tous les élèves', 'Une grande école en ville', 'Une école de musique', 'Une école pour les adultes'],
            en: ['A one-room school with students of all ages', 'A large urban school', 'A music school', 'A school for adults']
          },
          correct: 0,
          explanation: { fr: 'L\'école de rang est une petite école à la campagne avec une seule salle. Une institutrice enseigne à tous les élèves de différents âges en même temps.', en: 'A "école de rang" was a small rural school with a single classroom. One teacher taught students of all ages together.' }
        },
        {
          q: { fr: 'Quel bâtiment est au centre du village?', en: 'Which building was at the center of the village?' },
          icon: '⛪',
          choices: {
            fr: ['L\'église', 'La mairie', 'L\'école', 'Le marché'],
            en: ['The church', 'Town hall', 'The school', 'The market']
          },
          correct: 0,
          explanation: { fr: 'L\'église est situated au centre du village. Elle est le principal lieu de rassemblement des habitants.', en: 'The church stood at the center of the village and was the main gathering place for the community.' }
        },
        {
          q: { fr: 'Pourquoi le train est-il important pour les villages en 1905?', en: 'Why was the railway important for villages in 1905?' },
          icon: '🚂',
          choices: {
            fr: ['Il transporte marchandises et personnes vers les villes', 'Il remplace le médecin', 'Il cultive les champs', 'Il construit les maisons'],
            en: ['It transported goods and people to and from cities', 'It replaced the doctor', 'It plowed the fields', 'It built houses']
          },
          correct: 0,
          explanation: { fr: 'Le train permet de transporter des marchandises et des personnes entre les villages et les villes. Il apporte aussi du courrier et des journaux!', en: 'The railway transported goods and people between villages and cities, and also brought mail and newspapers to rural areas!' }
        },
        {
          q: { fr: 'Que vend le magasin général?', en: 'What did the general store sell?' },
          icon: '🛒',
          choices: {
            fr: ['Nourriture, vêtements et outils', 'Uniquement des livres', 'Seulement des légumes', 'Des automobiles'],
            en: ['Food, clothing, and tools', 'Only books', 'Only vegetables', 'Automobiles']
          },
          correct: 0,
          explanation: { fr: 'Le magasin général vendait de tout : nourriture, vêtements, outils. On pouvait aussi utiliser un catalogue pour commander des produits de la ville!', en: 'The general store sold everything: food, clothing, and tools. People could also use mail-order catalogs to order goods from the city!' }
        },
        {
          q: { fr: 'Comment les ruraux produisent-ils la plupart de leur nourriture?', en: 'How did rural families produce most of their food?' },
          icon: '🌱',
          choices: {
            fr: ['Ils cultivent leurs champs et élèvent des animaux', 'Ils achètent tout au marché', 'Ils commandent depuis la ville', 'Ils chassent uniquement'],
            en: ['They farmed their land and raised animals', 'They bought everything at the market', 'They ordered from the city', 'They only hunted']
          },
          correct: 0,
          explanation: { fr: 'Les familles à la campagne cultivaient leurs champs et élevaient des animaux pour l\'essentiel de leur alimentation.', en: 'Rural families grew their own crops and raised animals (chickens, cows, pigs) for most of their food.' }
        },
        {
          q: { fr: 'Qu\'est-ce qu\'un draveur?', en: 'What was a log driver (draveur)?' },
          icon: '🪵',
          choices: {
            fr: ['Un travailleur qui descend les billots sur les rivières', 'Un médecin de campagne', 'Un conducteur de tramway', 'Un instituteur'],
            en: ['A worker who guided logs down rivers', 'A country doctor', 'A streetcar driver', 'A schoolteacher']
          },
          correct: 0,
          explanation: { fr: 'Un draveur est un travailleur qui guide les billots de bois sur les rivières au printemps pour les amener aux scieries.', en: 'A log driver guided floating logs downriver in spring to deliver them to sawmills.' }
        },
        {
          q: { fr: 'Pourquoi fait-il froid dans les chantiers forestiers?', en: 'Why was it cold in logging camps?' },
          icon: '❄️',
          choices: {
            fr: ['Les hommes travaillent en hiver dans les forêts', 'Les maisons sont climatisées', 'Il neige en été', 'Les feux sont interdits'],
            en: ['The men worked through winter in the forests', 'The buildings had air conditioning', 'It snowed in summer', 'Fires were forbidden']
          },
          correct: 0,
          explanation: { fr: 'Les chantiers forestiers fonctionnent surtout en hiver. Les hommes dormaient dans des cabanes en bois rudimentaires et certains se réveillaient avec du givre sur la moustache!', en: 'Logging camps operated mainly during winter. Men slept in basic wooden cabins, and some woke up with frost on their mustaches!' }
        },
        {
          q: { fr: 'Quelles régions deviennent des zones de colonisation vers 1905?', en: 'Which regions became colonization zones around 1905?' },
          icon: '🗺️',
          choices: {
            fr: ['Les Laurentides, le Lac-Saint-Jean et l\'Abitibi-Témiscamingue', 'Montréal et Québec', 'L\'Ontario et le Manitoba', 'Les États-Unis et l\'Europe'],
            en: ['The Laurentians, Lac-Saint-Jean, and Abitibi-Témiscamingue', 'Montreal and Quebec City', 'Ontario and Manitoba', 'The United States and Europe']
          },
          correct: 0,
          explanation: { fr: 'Les Laurentides, le Lac-Saint-Jean et l\'Abitibi-Témiscamingue deviennent de nouvelles régions de colonisation vers 1905.', en: 'The Laurentians, Lac-Saint-Jean, and Abitibi-Témiscamingue became new colonization regions around 1905.' }
        }
      ]
    },
    {
      id: 'q3',
      icon: '✅',
      title: { fr: 'Vrai ou Faux', en: 'True or False' },
      desc: { fr: 'Toutes les périodes', en: 'All topics' },
      xp: 15,
      type: 'vf',
      questions: [
        { q: { fr: 'En 1905, Montréal est la plus grande ville du Québec.', en: 'In 1905, Montreal was Quebec\'s largest city.' }, correct: true, explanation: { fr: 'Vrai! Montréal est alors de loin la plus grande ville du Québec.', en: 'True! Montreal was by far Quebec\'s largest city at the time.' } },
        { q: { fr: 'La première automobile à Montréal fonctionnait à l\'essence.', en: 'The first automobile in Montreal ran on gasoline.' }, correct: false, explanation: { fr: 'Faux! La première automobile au Québec fonctionnait à la vapeur, pas à l\'essence.', en: 'False! The first automobile in Quebec ran on steam power, not gasoline.' } },
        { q: { fr: 'Les ouvriers travaillaient 10 heures par jour en 1905.', en: 'Factory workers worked 10 hours a day in 1905.' }, correct: true, explanation: { fr: 'Vrai! Les ouvriers faisaient de longues journées de 10 heures, 6 jours par semaine.', en: 'True! Workers put in 10-hour days, 6 days a week.' } },
        { q: { fr: 'Les quartiers ouvriers avaient l\'eau courante et l\'électricité.', en: 'Working-class neighborhoods had running water and electricity.' }, correct: false, explanation: { fr: 'Faux! C\'est dans les quartiers bourgeois qu\'on trouvait ces commodités. Les quartiers ouvriers n\'avaient souvent ni eau courante, ni électricité.', en: 'False! It was the wealthier neighborhoods that had these amenities. Working-class areas often lacked both running water and electricity.' } },
        { q: { fr: 'L\'école de rang avait une salle pour chaque niveau scolaire.', en: 'The "école de rang" had separate classrooms for each grade.' }, correct: false, explanation: { fr: 'Faux! L\'école de rang n\'avait qu\'une seule salle pour tous les élèves de tous les âges.', en: 'False! The one-room schoolhouse had a single classroom for students of all ages.' } },
        { q: { fr: 'Le train aidait à relier les villages aux villes vers 1905.', en: 'The railway connected villages to cities around 1905.' }, correct: true, explanation: { fr: 'Vrai! Le chemin de fer était très important pour les villages, permettant le transport de personnes et de marchandises.', en: 'True! The railway was vital for villages, allowing people and goods to travel between rural communities and the city.' } },
        { q: { fr: 'Les bûcherons travaillaient surtout l\'été dans les forêts.', en: 'Lumberjacks mainly worked in summer in the forests.' }, correct: false, explanation: { fr: 'Faux! Les chantiers forestiers fonctionnaient surtout en hiver. Les agriculteurs y travaillaient pendant les mois où ils ne pouvaient pas cultiver leurs champs.', en: 'False! Logging camps operated mainly in winter, when farmers had no crops to tend.' } },
        { q: { fr: 'Le curé du village était une personne très influente en 1905.', en: 'The village priest was a very influential figure in 1905.' }, correct: true, explanation: { fr: 'Vrai! Le curé était souvent la personne la plus influente du village. L\'église était au centre de la vie communautaire.', en: 'True! The parish priest was often the most influential person in the village. The church was central to community life.' } }
      ]
    },
    {
      id: 'q4',
      icon: '🔗',
      title: { fr: 'Quiz Éclair', en: 'Lightning Quiz' },
      desc: { fr: 'Rapide et amusant!', en: 'Quick and fun!' },
      xp: 10,
      type: 'mcq',
      questions: [
        {
          q: { fr: 'Qui est Ucal-Henri Dandurand?', en: 'Who was Ucal-Henri Dandurand?' },
          icon: '🚗',
          choices: { fr: ['Le premier propriétaire d\'une automobile à Montréal', 'Un curé célèbre', 'Un premier ministre', 'Un bûcheron'], en: ['The owner of Montreal\'s first automobile', 'A famous priest', 'A prime minister', 'A lumberjack'] },
          correct: 0,
          explanation: { fr: 'Ucal-Henri Dandurand a fait entrer la première automobile dans les rues de Montréal le 21 novembre 1899.', en: 'Ucal-Henri Dandurand drove Montreal\'s first automobile through the city streets on November 21, 1899.' }
        },
        {
          q: { fr: 'Quel catalogue permettait aux ruraux de commander en 1905?', en: 'Which catalog let rural families shop by mail in 1905?' },
          icon: '📦',
          choices: { fr: ['Le catalogue Eaton', 'Le catalogue Amazon', 'Le catalogue Sears', 'Le catalogue Costco'], en: ['The Eaton\'s catalogue', 'The Amazon catalogue', 'The Sears catalogue', 'The Costco catalogue'] },
          correct: 0,
          explanation: { fr: 'Le catalogue Eaton (1905) permettait aux gens de la campagne de commander des produits des villes sans se déplacer!', en: 'The Eaton\'s mail-order catalogue (1905) let rural families order city goods without traveling to town!' }
        },
        {
          q: { fr: 'Qu\'est-ce que défricher une terre?', en: 'What does it mean to "défr icher" (clear) the land?' },
          icon: '🌲',
          choices: { fr: ['Enlever les arbres et les souches', 'Planter des légumes', 'Construire une grange', 'Creuser un puits'], en: ['Cutting trees and removing stumps', 'Planting vegetables', 'Building a barn', 'Digging a well'] },
          correct: 0,
          explanation: { fr: 'Défricher, c\'est enlever les arbres, les branches et les souches pour préparer la terre à l\'agriculture.', en: 'Clearing land meant removing trees, branches, and stumps to prepare the soil for farming.' }
        },
        {
          q: { fr: 'Antoine Labelle était surtout connu comme...', en: 'Antoine Labelle was best known as...' },
          icon: '⛪',
          choices: { fr: ['Un curé et sous-ministre de la colonisation', 'Un général militaire', 'Un bûcheron célèbre', 'Un inventeur'], en: ['A priest and deputy minister of colonization', 'A military general', 'A famous lumberjack', 'An inventor'] },
          correct: 0,
          explanation: { fr: 'Antoine Labelle était curé et sous-ministre de l\'Agriculture et de la Colonisation. Il développait de nouvelles paroisses dans les Laurentides.', en: 'Antoine Labelle was a priest and deputy minister who worked to establish new parishes in the Laurentians.' }
        },
        {
          q: { fr: 'Honoré Mercier était...', en: 'Honoré Mercier was...' },
          icon: '👨‍⚖️',
          choices: { fr: ['Premier ministre du Québec', 'Un médecin', 'Un bûcheron', 'Un instituteur'], en: ['Premier of Quebec', 'A doctor', 'A lumberjack', 'A teacher'] },
          correct: 0,
          explanation: { fr: 'Honoré Mercier était premier ministre du Québec de 1887 à 1891. Il développait les chemins de fer pour faciliter la colonisation.', en: 'Honoré Mercier was Premier of Quebec from 1887 to 1891. He expanded the railway network to support colonization.' }
        }
      ]
    },
    {
      id: 'q5',
      icon: '🏆',
      title: { fr: 'Le Grand Défi', en: 'The Big Challenge' },
      desc: { fr: 'Tout mélangé – experts seulement!', en: 'All topics mixed – experts only!' },
      xp: 30,
      type: 'mcq',
      questions: [
        {
          q: { fr: 'Quelle région a le plus de colons en 1901 selon les données?', en: 'Which region had the most settlers in 1901?' },
          icon: '📊',
          choices: { fr: ['Saguenay–Lac-Saint-Jean', 'Abitibi-Témiscamingue', 'Outaouais', 'Les Laurentides'], en: ['Saguenay–Lac-Saint-Jean', 'Abitibi-Témiscamingue', 'Outaouais', 'The Laurentians'] },
          correct: 0,
          explanation: { fr: 'Selon les données historiques, le Saguenay–Lac-Saint-Jean avait le plus grand nombre de colons en 1901.', en: 'Historical data shows Saguenay–Lac-Saint-Jean had the largest settler population in 1901.' }
        },
        {
          q: { fr: 'Quelle proportion vit à la campagne vers 1905?', en: 'What proportion of the population lived in the countryside around 1905?' },
          icon: '🌾',
          choices: { fr: ['60 %', '40 %', '80 %', '50 %'], en: ['60%', '40%', '80%', '50%'] },
          correct: 0,
          explanation: { fr: '60 % de la population habitait à la campagne en 1905; 40 % en ville.', en: '60% of Quebec\'s population lived in the countryside in 1905, while 40% lived in cities.' }
        },
        {
          q: { fr: 'Qu\'est-ce qui rend la vie des bûcherons difficile en chantier?', en: 'What made life in logging camps so difficult?' },
          icon: '❄️',
          choices: { fr: ['Froid extrême, manque d\'hygiène et longues journées', 'Nourriture trop abondante', 'Trop de temps libre', 'Des machines modernes dangereuses'], en: ['Extreme cold, poor hygiene, and long workdays', 'Too much food', 'Too much free time', 'Dangerous modern machinery'] },
          correct: 0,
          explanation: { fr: 'La vie en chantier était dure : grand froid, mauvaise hygiène, bains rares, poux, maladies et longues journées de travail.', en: 'Life in logging camps was tough: bitter cold, poor sanitation, rare baths, lice, illness, and exhausting long workdays.' }
        },
        {
          q: { fr: 'Quand Valleyfield est-elle décrite comme ville industrielle?', en: 'What industry was Valleyfield known for around 1905?' },
          icon: '🏭',
          choices: { fr: ['Le textile', 'Les mines', 'La construction navale', 'L\'agriculture'], en: ['Textile production', 'Mining', 'Shipbuilding', 'Agriculture'] },
          correct: 0,
          explanation: { fr: 'Valleyfield était une ville industrielle spécialisée dans le textile vers 1905.', en: 'Valleyfield was an industrial city specializing in textile production around 1905.' }
        },
        {
          q: { fr: 'Quel minerai trouve-t-on surtout à Thetford Mines?', en: 'Which mineral was Thetford Mines famous for?' },
          icon: '⛏️',
          choices: { fr: ['L\'amiante', 'Le charbon', 'Le cuivre', 'L\'or'], en: ['Asbestos', 'Coal', 'Copper', 'Gold'] },
          correct: 0,
          explanation: { fr: 'Thetford Mines est connue pour ses importantes mines d\'amiante vers 1905.', en: 'Thetford Mines was famous for its significant asbestos deposits around 1905.' }
        }
      ]
    }
  ],

  /* ══════════════════════════════════════════════
     GAMES
  ══════════════════════════════════════════════ */
  games: [
    {
      id: 'g1',
      icon: '🔗',
      title: { fr: 'Associe!', en: 'Match It!' },
      desc: { fr: 'Associe les mots à leur définition', en: 'Match words to their definitions' },
      xp: 20,
      pairs: [
        { term: { fr: 'Tramway', en: 'Streetcar' }, def: { fr: 'Transport électrique sur rails en ville', en: 'Electric rail transport in the city' } },
        { term: { fr: 'Syndicat', en: 'Labor Union' }, def: { fr: 'Organisation d\'ouvriers pour améliorer leurs conditions', en: 'Worker organization to improve working conditions' } },
        { term: { fr: 'Défricher', en: 'Clear land' }, def: { fr: 'Enlever les arbres pour cultiver la terre', en: 'Remove trees to prepare land for farming' } },
        { term: { fr: 'École de rang', en: 'One-room school' }, def: { fr: 'École rurale avec une seule classe', en: 'Rural school with a single classroom' } },
        { term: { fr: 'Draveur', en: 'Log driver' }, def: { fr: 'Travailleur qui descend les billots sur les rivières', en: 'Worker who guides logs down rivers' } },
        { term: { fr: 'Bourgeois', en: 'Wealthy citizen' }, def: { fr: 'Personne riche qui vit confortablement', en: 'Wealthy person living comfortably' } }
      ]
    },
    {
      id: 'g2',
      icon: '📅',
      title: { fr: 'Frise du temps', en: 'Timeline' },
      desc: { fr: 'Mets les événements en ordre', en: 'Put events in the right order' },
      xp: 20,
      events: [
        { id: 1, label: { fr: 'Débuts du tramway électrique à Montréal', en: 'Electric streetcar launches in Montreal' }, year: 1892 },
        { id: 2, label: { fr: 'Honoré Mercier, premier ministre du Québec', en: 'Honoré Mercier becomes Premier of Quebec' }, year: 1887 },
        { id: 3, label: { fr: 'Première automobile dans les rues de Montréal', en: 'First automobile appears in Montreal\'s streets' }, year: 1899 },
        { id: 4, label: { fr: 'Le Québec vers 1905 : 40% de la population en ville', en: 'Quebec around 1905: 40% of population in cities' }, year: 1905 },
        { id: 5, label: { fr: 'Catalogue Eaton distribué dans les campagnes', en: 'Eaton\'s catalogue distributed in rural areas' }, year: 1905 }
      ]
    },
    {
      id: 'g3',
      icon: '🔤',
      title: { fr: 'Mot Mystère', en: 'Mystery Word' },
      desc: { fr: 'Déchiffre le mot et trouve la réponse', en: 'Unscramble the word and find the answer' },
      xp: 15,
      words: [
        { word: 'TRAMWAY', hint: { fr: 'Transport en commun électrique sur rails', en: 'Electric rail public transport' } },
        { word: 'SYNDICAT', hint: { fr: 'Organisation des ouvriers', en: 'Worker organization' } },
        { word: 'BÂCHERON', hint: { fr: 'Travailleur qui coupe les arbres', en: 'Worker who cuts down trees' } },
        { word: 'DRAVEUR', hint: { fr: 'Il guide les billots sur les rivières', en: 'He guides logs down rivers' } },
        { word: 'COLONISATION', hint: { fr: 'S\'installer sur de nouvelles terres', en: 'Settling on new land' } },
        { word: 'ÉLECTRICITÉ', hint: { fr: 'Elle éclaire les villes en 1905', en: 'It lit up cities in 1905' } },
        { word: 'DÉFRICHER', hint: { fr: 'Enlever les arbres pour cultiver', en: 'Clear trees to farm the land' } },
        { word: 'BOURGEOIS', hint: { fr: 'Habitant riche de la ville', en: 'Wealthy city resident' } }
      ]
    }
  ],

  /* ══════════════════════════════════════════════
     GLOSSARY
  ══════════════════════════════════════════════ */
  glossary: [
    { term: 'Amiante', def: { fr: 'Minerai extrait à Thetford Mines, utilisé dans la construction.', en: 'A mineral mined at Thetford Mines, used in construction.' } },
    { term: 'Bûcheron', def: { fr: 'Travailleur qui coupe les arbres dans les forêts (chantiers forestiers).', en: 'A worker who cuts trees in logging camps.' } },
    { term: 'Chantier forestier', def: { fr: 'Camp en forêt où les bûcherons travaillent en hiver.', en: 'A forest camp where lumberjacks work during winter.' } },
    { term: 'Colonisation', def: { fr: 'Action de s\'installer sur une nouvelle terre pour la cultiver.', en: 'The act of settling on new land for farming.' } },
    { term: 'Défricher', def: { fr: 'Préparer la terre pour l\'agriculture en enlevant les arbres et les souches.', en: 'Preparing land for farming by clearing trees and stumps.' } },
    { term: 'Draveur', def: { fr: 'Ouvrier qui guide les billots sur les rivières au printemps.', en: 'A worker who guides logs floating down rivers in spring.' } },
    { term: 'École de rang', def: { fr: 'Petite école rurale avec une seule pièce pour tous les élèves.', en: 'A small rural school with one room for all students.' } },
    { term: 'Électricité', def: { fr: 'Energie qui éclaire les villes et fait fonctionner les tramways vers 1905.', en: 'The energy that lit up cities and powered streetcars around 1905.' } },
    { term: 'Institutrice', def: { fr: 'Enseignante qui donne les cours à l\'école.', en: 'A female teacher who gives lessons at school.' } },
    { term: 'Magasin général', def: { fr: 'Boutique qui vend de tout : nourriture, vêtements et outils.', en: 'A store that sells everything: food, clothing, and tools.' } },
    { term: 'Ouvrier', def: { fr: 'Travailleur qui travaille dans une usine ou sur un chantier.', en: 'A worker who works in a factory or on a construction site.' } },
    { term: 'Quartier bourgeois', def: { fr: 'Quartier riche où habitent les gens aisés avec de grandes maisons.', en: 'A wealthy neighborhood where well-off families lived in large homes.' } },
    { term: 'Quartier ouvrier', def: { fr: 'Quartier pauvre, proche des usines, souvent sans eau courante ni électricité.', en: 'A poor neighborhood near factories, often without running water or electricity.' } },
    { term: 'Rail', def: { fr: 'Pièce métallique sur laquelle roulent les tramways et les trains.', en: 'A metal track on which streetcars and trains run.' } },
    { term: 'Syndicat', def: { fr: 'Organisation d\'ouvriers qui fait pression pour de meilleures conditions de travail.', en: 'A workers\' organization that fights for better working conditions.' } },
    { term: 'Tramway', def: { fr: 'Véhicule de transport en commun qui roule sur des rails grâce à l\'électricité.', en: 'A public transport vehicle that runs on electric rails.' } },
    { term: 'Urbanisation', def: { fr: 'Le développement des villes et l\'augmentation de leur population.', en: 'The growth and development of cities and their populations.' } }
  ],

  /* XP level thresholds */
  levels: [
    { min: 0, name: { fr: 'Débutant', en: 'Beginner' }, icon: '🌱' },
    { min: 30, name: { fr: 'Explorateur', en: 'Explorer' }, icon: '🦦' },
    { min: 80, name: { fr: 'Historien', en: 'Historian' }, icon: '📜' },
    { min: 160, name: { fr: 'Expert', en: 'Expert' }, icon: '🏆' },
    { min: 250, name: { fr: 'Maître', en: 'Master' }, icon: '⚜️' }
  ]
};
