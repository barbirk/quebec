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
              type: 'stats',
              stats: [
                { icon: '👥', value: '1.6M', suffix: '', label: { fr: 'Habitants au Québec', en: 'People in Quebec' }, percent: 75 },
                { icon: '🏙️', value: '40', suffix: '%', label: { fr: 'Vivent en ville', en: 'Live in cities' }, percent: 40 },
                { icon: '🌾', value: '60', suffix: '%', label: { fr: 'Vivent à la campagne', en: 'Live in countryside' }, percent: 60 },
                { icon: '🚃', value: '1892', suffix: '', label: { fr: 'Premier tramway à Montréal', en: 'First Montreal streetcar' } }
              ]
            },
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
              type: 'flip',
              front: {
                icon: '🏙️',
                title: { fr: 'Ville vs Campagne', en: 'City vs Countryside' }
              },
              back: {
                text: { 
                  fr: 'En 1901, seulement 40% des habitants vivaient en ville. Les 60% restants habitaient à la campagne. Mais les villes grandissaient à toute vitesse!', 
                  en: 'In 1901, only 40% of Quebec\'s population lived in cities. The other 60% lived in the countryside. But cities were growing fast!'
                }
              }
            },
            {
              type: 'callout',
              variant: 'info',
              icon: '🏙️',
              text: {
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
              type: 'timeline',
              events: [
                { year: '1887', icon: '🏛️', text: { fr: 'Honoré Mercier devient premier ministre du Québec', en: 'Honoré Mercier becomes Premier of Quebec' } },
                { year: '1890s', icon: '⛪', text: { fr: 'Le curé Antoine Labelle développe les paroisses dans les Laurentides', en: 'Priest Antoine Labelle develops parishes in the Laurentians' } },
                { year: '1901', icon: '📈', text: { fr: 'Le Québec compte 1,6 million d\'habitants', en: 'Quebec reaches 1.6 million inhabitants' } },
                { year: '1905', icon: '🚂', text: { fr: 'Expansion des chemins de fer et des villes industrielles', en: 'Expansion of railways and industrial cities' } }
              ]
            },
            {
              type: 'hotspot',
              image: 'svg:icons/map-quebec.svg',
              intro: { 
                fr: 'Clique sur les points pour découvrir les régions de colonisation', 
                en: 'Click the points to discover the colonization regions' 
              },
              hotspots: [
                { x: 44, y: 49, info: { fr: 'Les Laurentides : région montagneuse au nord de Montréal, développée par le curé Labelle', en: 'The Laurentians: mountainous region north of Montreal, developed by priest Labelle' } },
                { x: 60, y: 22, info: { fr: 'Lac-Saint-Jean : terres fertiles pour l\'agriculture', en: 'Lac-Saint-Jean: fertile lands for agriculture' } },
                { x: 26, y: 33, info: { fr: 'Abitibi-Témiscamingue : nouvelle frontière du Québec', en: 'Abitibi-Témiscamingue: new Quebec frontier' } },
                { x: 56, y: 76, info: { fr: 'Thetford Mines : centre minier avec amiante (Cantons de l\'Est)', en: 'Thetford Mines: mining center with asbestos (Eastern Townships)' } },
                { x: 29, y: 88, info: { fr: 'Valleyfield : ville industrielle du textile (près de la frontière Ontario)', en: 'Valleyfield: industrial textile city (near Ontario border)' } }
              ]
            },
            {
              type: 'diagram',
              title: { fr: 'Pourquoi partir s\'installer ailleurs?', en: 'Why move to new lands?' },
              nodes: [
                { text: { fr: '🏔️ Terres occupées', en: '🏔️ Lands occupied' } },
                { text: { fr: '👨‍👩‍👧‍👦 Familles nombreuses', en: '👨‍👩‍👧‍👦 Large families' } },
                { text: { fr: '🌲 Nouvelles régions', en: '🌲 New regions' }, variant: 'success' }
              ]
            },
            {
              type: 'fact',
              emoji: '⛪',
              content: {
                fr: 'Antoine Labelle, curé et sous-ministre, s\'engage à développer plusieurs nouvelles paroisses dans la région des Laurentides pour encourager la colonisation.',
                en: 'Antoine Labelle, a priest and deputy minister, worked to establish new parishes in the Laurentians to encourage colonization.'
              }
            }
          ]
        },
        {
          title: { fr: 'L\'urbanisation', en: 'Urbanization' },
          cards: [
            {
              type: 'stats',
              stats: [
                { icon: '📈', value: '267', suffix: '%', label: { fr: 'Croissance Montréal 1871-1901', en: 'Montreal growth 1871-1901' }, percent: 85 },
                { icon: '🏭', value: '40', suffix: '%', label: { fr: 'Population urbaine', en: 'Urban population' }, percent: 40 },
                { icon: '🚶', value: '10K', suffix: '+', label: { fr: 'Nouveaux citadins/an', en: 'New city dwellers/year' }, percent: 65 }
              ]
            },
            {
              type: 'info',
              icon: '🏙️',
              title: { fr: 'L\'exode rural', en: 'The rural exodus' },
              content: {
                fr: 'Entre 1871 et 1901, la population de Montréal augmente de 267%! De plus en plus de familles quittent les campagnes pour s\'installer en ville, attirées par les emplois dans les usines et les commerces. Les villes deviennent surpeuplées et doivent s\'étendre.',
                en: 'Between 1871 and 1901, Montreal\'s population grew by 267%! More and more families left the countryside to settle in cities, attracted by jobs in factories and commerce. Cities became overcrowded and had to expand.'
              }
            },
            {
              type: 'comparison',
              left: {
                label: { fr: '🌾 La campagne', en: '🌾 The countryside' },
                variant: 'blue',
                items: {
                  fr: ['Vie traditionnelle', 'Travail à la ferme', 'Pas de salaire fixe', 'Éloignement des services', 'Familles nombreuses'],
                  en: ['Traditional life', 'Farm work', 'No fixed salary', 'Remote from services', 'Large families']
                }
              },
              right: {
                label: { fr: '🏭 La ville', en: '🏭 The city' },
                variant: 'red',
                items: {
                  fr: ['Nouveautés (électricité, tramway)', 'Emplois industriels', 'Salaire régulier', 'Magasins et distractions', 'Logements surpeuplés'],
                  en: ['New things (electricity, streetcar)', 'Industrial jobs', 'Regular salary', 'Shops and entertainment', 'Overcrowded housing']
                }
              }
            },
            {
              type: 'callout',
              variant: 'info',
              icon: '📊',
              text: {
                fr: 'Les villes du Québec connaissent une croissance explosive. Montréal passe de 107 000 habitants en 1871 à 267 000 en 1901. Québec, Trois-Rivières, Sherbrooke et Valleyfield connaissent aussi une croissance rapide.',
                en: 'Quebec cities are experiencing explosive growth. Montreal grew from 107,000 inhabitants in 1871 to 267,000 in 1901. Quebec City, Trois-Rivières, Sherbrooke and Valleyfield also experienced rapid growth.'
              }
            }
          ]
        },
        {
          title: { fr: 'L\'émigration', en: 'Emigration' },
          cards: [
            {
              type: 'diagram',
              title: { fr: 'Où vont les Québécois?', en: 'Where do Quebecers go?' },
              layout: 'horizontal',
              nodes: [
                { text: { fr: '🇨🇦 Québec', en: '🇨🇦 Quebec' } },
                { text: { fr: '🇺🇸 Nouvelle-Angleterre', en: '🇺🇸 New England' }, variant: 'secondary' },
                { text: { fr: '🏭 Usines textiles', en: '🏭 Textile mills' }, variant: 'success' }
              ]
            },
            {
              type: 'info',
              icon: '🚂',
              title: { fr: 'L\'exode vers les États-Unis', en: 'The exodus to the United States' },
              content: {
                fr: 'Beaucoup de Canadiens français émigrent vers la Nouvelle-Angleterre (Maine, New Hampshire, Massachusetts) pour travailler dans les usines textiles. Vers 1900, environ 500 000 Québécois vivent aux États-Unis! Ils partent pour échapper à la pauvreté et trouver de meilleurs salaires.',
                en: 'Many French Canadians emigrated to New England (Maine, New Hampshire, Massachusetts) to work in textile mills. Around 1900, about 500,000 Quebecers lived in the United States! They left to escape poverty and find better wages.'
              }
            },
            {
              type: 'flip',
              front: {
                icon: '🇺🇸',
                title: { fr: 'Pourquoi partir?', en: 'Why leave?' }
              },
              back: {
                text: { 
                  fr: 'Les terres sont de plus en plus rares au Québec. Les jeunes n\'ont pas les moyens de s\'établir. Aux États-Unis, les usines embauchent beaucoup et paient mieux. Certains reviendront, d\'autres s\'installeront définitivement.', 
                  en: 'Land is increasingly scarce in Quebec. Young people cannot afford to settle. In the United States, factories hire many workers and pay better. Some will return, others will settle permanently.'
                }
              }
            },
            {
              type: 'stats',
              stats: [
                { icon: '🇺🇸', value: '500K', suffix: '', label: { fr: 'Québécois aux USA', en: 'Quebecers in USA' }, percent: 75 },
                { icon: '🏭', value: '30%', suffix: '', label: { fr: 'Partent aux USA', en: 'Leave for USA' }, percent: 30 },
                { icon: '💰', value: '2x', suffix: '', label: { fr: 'Salaire US vs QC', en: 'US vs QC salary' }, percent: 80 }
              ]
            }
          ]
        },
        {
          title: { fr: 'La composition de la population', en: 'Population Composition' },
          cards: [
            {
              type: 'visual-compare',
              left: {
                icon: '⚜️',
                title: { fr: 'Canadiens français', en: 'French Canadians' },
                variant: 'positive',
                items: {
                  fr: ['80% de la population', 'Majoritairement catholiques', 'Agriculture et colonisation', 'Langue française', 'Familles nombreuses'],
                  en: ['80% of population', 'Mostly Catholic', 'Agriculture and colonization', 'French language', 'Large families']
                }
              },
              right: {
                icon: '🇬🇧',
                title: { fr: 'Anglophones', en: 'English-speaking' },
                variant: 'negative',
                items: {
                  fr: ['20% de la population', 'Majoritairement protestants', 'Commerce et industrie', 'Langue anglaise', 'Contrôlent l\'économie'],
                  en: ['20% of population', 'Mostly Protestant', 'Commerce and industry', 'English language', 'Control the economy']
                }
              }
            },
            {
              type: 'info',
              icon: '🌍',
              title: { fr: 'Les immigrants', en: 'Immigrants' },
              content: {
                fr: 'Vers 1905, des immigrants arrivent de partout : Irlandais, Écossais, Italiens, Juifs d\'Europe de l\'Est, Polonais, Ukrainiens... Ils s\'installent surtout en ville et travaillent dans les industries. Montréal devient une ville multiculturelle.',
                en: 'Around 1905, immigrants arrived from everywhere: Irish, Scottish, Italians, Eastern European Jews, Poles, Ukrainians... They mostly settled in cities and worked in industries. Montreal became a multicultural city.'
              }
            },
            {
              type: 'callout',
              variant: 'info',
              icon: '⚜️',
              text: {
                fr: 'Malgré l\'arrivée de nombreux immigrants, les Canadiens français restent la grande majorité au Québec (environ 80%). Ils sont majoritairement agriculteurs et vivent à la campagne ou dans les quartiers ouvriers des villes.',
                en: 'Despite the arrival of many immigrants, French Canadians remain the vast majority in Quebec (about 80%). They are mostly farmers and live in the countryside or in working-class city neighborhoods.'
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
              type: 'progress-steps',
              steps: [
                { icon: '🕯️', label: { fr: 'Avant', en: 'Before' }, completed: true },
                { icon: '💡', label: { fr: 'Électricité', en: 'Electricity' }, completed: true, active: true },
                { icon: '🚃', label: { fr: 'Tramway', en: 'Streetcar' }, completed: true },
                { icon: '🚗', label: { fr: 'Auto', en: 'Car' }, completed: false }
              ]
            },
            {
              type: 'gallery',
              image: '⚡',
              title: { fr: 'L\'arrivée de l\'électricité', en: 'The arrival of electricity' },
              description: {
                fr: 'Vers 1905, les grandes villes du Québec reçoivent l\'<strong>électricité</strong>. Elle change complètement la façon de vivre : on s\'éclaire la nuit, on utilise des tramways électriques, et certains foyers ont des appareils électriques!',
                en: '<strong>Electricity</strong> arrived in Quebec\'s major cities around 1905. It transformed daily life: people had electric lighting, electric streetcars ran through the streets, and some homes even had electrical appliances!'
              }
            },
            {
              type: 'flip',
              front: {
                icon: '🚗',
                title: { fr: '21 novembre 1899', en: 'November 21, 1899' }
              },
              back: {
                text: { 
                  fr: 'La première automobile fait son apparition dans les rues de Montréal! Elle appartient à Ucal-Henri Dandurand et fonctionne à la vapeur. Malgré cela, les chevaux restent encore très présents dans les rues.', 
                  en: 'The first automobile appeared on Montreal\'s streets! It belonged to Ucal-Henri Dandurand and ran on steam power. Despite this, horse-drawn vehicles remained common.'
                }
              }
            },
            {
              type: 'callout',
              variant: 'success',
              icon: '🚃',
              text: {
                fr: 'Le tramway est le principal moyen de transport en commun vers 1905. Des milliers d\'ouvriers et de bourgeois l\'utilisent chaque jour!',
                en: 'The streetcar was the main form of public transportation around 1905. Thousands of workers and wealthy citizens used it daily!'
              }
            }
          ]
        },
        {
          title: { fr: 'Le développement des villes', en: 'City Development' },
          cards: [
            {
              type: 'progress-steps',
              steps: [
                { icon: '🏗️', label: { fr: 'Construction', en: 'Construction' }, completed: true },
                { icon: '🏛️', label: { fr: 'Édifices', en: 'Buildings' }, completed: true },
                { icon: '🛣️', label: { fr: 'Rues pavées', en: 'Paved streets' }, completed: true, active: true },
                { icon: '💧', label: { fr: 'Aqueduc', en: 'Aqueduct' }, completed: false }
              ]
            },
            {
              type: 'info',
              icon: '🏗️',
              title: { fr: 'Une croissance rapide', en: 'Rapid growth' },
              content: {
                fr: 'Les villes québécoises se transforment rapidement vers 1905. De nouveaux édifices publics sont construits : hôtels de ville, églises, gares ferroviaires. Les rues sont pavées et éclairées au gaz puis à l\'électricité. Des aqueducs et des égouts sont installés pour améliorer l\'hygiène.',
                en: 'Quebec cities are transforming rapidly around 1905. New public buildings are being constructed: city halls, churches, railway stations. Streets are paved and lit by gas then electricity. Aqueducts and sewers are being installed to improve hygiene.'
              }
            },
            {
              type: 'timeline',
              events: [
                { year: '1880s', icon: '💡', text: { fr: 'Installation des réseaux de gaz pour l\'éclairage', en: 'Installation of gas networks for lighting' } },
                { year: '1890s', icon: '⚡', text: { fr: 'Arrivée de l\'électricité dans les centres-villes', en: 'Electricity arrives in city centers' } },
                { year: '1892', icon: '🚃', text: { fr: 'Premier tramway électrique à Montréal', en: 'First electric streetcar in Montreal' } },
                { year: '1900s', icon: '💧', text: { fr: 'Construction des aqueducs et égouts modernes', en: 'Construction of modern aqueducts and sewers' } }
              ]
            },
            {
              type: 'gallery',
              image: '🏛️',
              title: { fr: 'Les nouveaux édifices', en: 'New buildings' },
              description: {
                fr: 'Les villes se modernisent avec de grands édifices : la gare Windsor à Montréal (1889), l\'hôtel de ville de Québec (1895), de nouvelles églises et des banques imposantes. Ces bâtiments montrent la richesse et l\'importance des villes.',
                en: 'Cities are modernizing with grand buildings: Windsor Station in Montreal (1889), Quebec City Hall (1895), new churches and imposing banks. These buildings show the wealth and importance of cities.'
              }
            },
            {
              type: 'fact',
              emoji: '🏭',
              content: {
                fr: 'L\'industrie attire de plus en plus de travailleurs en ville. Les usines de textile, de chaussures, de tabac et de métal se multiplient. Les quartiers ouvriers poussent comme des champignons autour des usines.',
                en: 'Industry attracts more and more workers to cities. Textile, shoe, tobacco and metal factories are multiplying. Working-class neighborhoods are mushrooming around factories.'
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
              type: 'visual-compare',
              left: {
                icon: '🏚️',
                title: { fr: '👷 Quartiers ouvriers', en: '👷 Working-Class Areas' },
                variant: 'negative',
                items: {
                  fr: ['Petites maisons mal entretenues', 'Pas de toilettes ni d\'eau courante', 'Pas d\'électricité ni de chauffage central', 'Proches des usines et de leurs fumées', 'Journées de 10h, 6 jours par semaine', 'Alimentation : pain, lard salé, fèves, œufs'],
                  en: ['Small, poorly maintained homes', 'No indoor toilets or running water', 'No electricity or central heating', 'Located near noisy, smoky factories', '10-hour workdays, 6 days a week', 'Diet: bread, salt pork, beans, eggs']
                }
              },
              right: {
                icon: '🏰',
                title: { fr: '🎩 Quartiers bourgeois', en: '🎩 Wealthy Neighborhoods' },
                variant: 'positive',
                items: {
                  fr: ['Grandes maisons avec plusieurs pièces', 'Eau courante et toilettes intérieures', 'Électricité et chauffage central', 'Quartiers calmes et verdoyants', 'Domestiques à la maison', 'Alimentation variée : poulet, agneau, fromage, fruits, desserts'],
                  en: ['Large homes with many rooms', 'Running water and indoor plumbing', 'Electricity and central heating', 'Quiet, tree-lined neighborhoods', 'Domestic servants in the home', 'Varied diet: chicken, lamb, cheese, fruits, and desserts']
                }
              }
            },
            {
              type: 'stats',
              stats: [
                { icon: '⏰', value: '10h', suffix: '', label: { fr: 'Par jour de travail', en: 'Work per day' }, percent: 80 },
                { icon: '📅', value: '6', suffix: '/7', label: { fr: 'Jours par semaine', en: 'Days per week' }, percent: 85 },
                { icon: '🏭', value: '40', suffix: '%', label: { fr: 'En ville en 1901', en: 'In cities by 1901' }, percent: 40 }
              ]
            }
          ]
        },
        {
          title: { fr: 'Les syndicats ouvriers', en: 'Labor Unions' },
          cards: [
            {
              type: 'diagram',
              title: { fr: 'Comment les syndicats aident les ouvriers', en: 'How unions help workers' },
              layout: 'horizontal',
              nodes: [
                { text: { fr: '👷 Problèmes', en: '👷 Problems' } },
                { text: { fr: '🤝 Syndicat', en: '🤝 Union' }, variant: 'secondary' },
                { text: { fr: '✅ Améliorations!', en: '✅ Improvements!' }, variant: 'success' }
              ]
            },
            {
              type: 'callout',
              variant: 'success',
              icon: '✊',
              text: {
                fr: 'Les conditions de travail sont très difficiles pour les ouvriers : salaires bas, longues journées, dangers dans les usines. Pour améliorer leur situation, les ouvriers se regroupent en syndicats pour faire pression sur les employeurs.',
                en: 'Working conditions were very tough: low wages, long hours, and dangerous factories. To improve their situation, workers organized into labor unions to put pressure on employers.'
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
              type: 'hotspot',
              image: 'svg:icons/village-rural.svg',
              intro: { 
                fr: 'Clique sur les points pour découvrir les éléments du village', 
                en: 'Click the points to discover village elements' 
              },
              hotspots: [
                { x: 50, y: 20, info: { fr: '⛪ L\'église : cœur du village et principal lieu de rassemblement chaque dimanche', en: '⛪ The church: heart of the village and main gathering place every Sunday' } },
                { x: 25, y: 45, info: { fr: '🛒 Le magasin général : on y trouve de tout, de la nourriture aux outils', en: '🛒 The general store: everything from food to tools' } },
                { x: 80, y: 45, info: { fr: '🔨 Les Artisans : forge et atelier où les villageois font réparer leurs outils et objets', en: '🔨 The Artisans: forge and workshop where villagers repair their tools and items' } },
                { x: 110, y: 60, info: { fr: '🎒 L\'école de rang : petite école avec une seule salle pour tous les élèves de différents âges', en: '🎒 The one-room schoolhouse: small school with one room for all students of different ages' } },
                { x: 50, y: 68, info: { fr: '💧 Le Puits : source d\'eau communautaire - il n\'y a pas d\'eau courante dans les maisons!', en: '💧 The Well: community water source - there is no running water in homes!' } }
              ]
            },
            {
              type: 'flip',
              front: {
                icon: '📖',
                title: { fr: 'Catalogue Eaton', en: 'Eaton\'s Catalogue' }
              },
              back: {
                text: { 
                  fr: 'Le célèbre catalogue Eaton (1905) permet aux gens de la campagne de commander des produits des villes sans se déplacer!', 
                  en: 'The famous Eaton\'s catalogue (1905) let rural families order city goods without traveling to town!'
                }
              }
            },
            {
              type: 'callout',
              variant: 'info',
              icon: '⛪',
              text: {
                fr: 'L\'église est au centre du village. C\'est le principal lieu de rassemblement. Le curé est souvent la personne la plus influente du village.',
                en: 'The church is at the center of the village. It\'s the main gathering place. The parish priest is often the most influential person.'
              }
            }
          ]
        },
        {
          title: { fr: 'Les services du village', en: 'Village Services' },
          cards: [
            {
              type: 'info',
              icon: '🏘️',
              title: { fr: 'Les services essentiels du village', en: 'Essential village services' },
              content: {
                fr: '<strong>⛪ L\'église</strong> : Cœur du village, lieu de rassemblement religieux et social chaque dimanche. Le curé est souvent la personne la plus influente.<br><br><strong>🛒 Le magasin général</strong> : On y trouve de tout (nourriture, vêtements, outils). Les habitants utilisent aussi le catalogue Eaton pour commander des produits de la ville.<br><br><strong>🎒 L\'école de rang</strong> : Petite école avec une seule salle pour tous les élèves de 6 à 15 ans. Une institutrice enseigne à tous en même temps.<br><br><strong>👨‍⚕️ Le médecin</strong> : Il y en a très peu à la campagne. Il parcourt plusieurs kilomètres en voiture à cheval pour soigner les malades chez eux.<br><br><strong>🔨 La forge</strong> : L\'artisan (forgeron) répare les outils agricoles, les fers à cheval et fabrique des objets en métal.<br><br><strong>🌾 Le moulin</strong> : Les agriculteurs y apportent leurs grains pour faire de la farine. Certains moulins fonctionnent à l\'eau, d\'autres au vent.<br><br><strong>📮 La poste</strong> : Le facteur distribue le courrier. Les journaux arrivent par le train et sont ensuite distribués dans les villages.',
                en: '<strong>⛪ The Church</strong>: Heart of the village, religious and social gathering place every Sunday. The priest is often the most influential person.<br><br><strong>🛒 The General Store</strong>: Everything can be found here (food, clothing, tools). People also use the Eaton catalogue to order city goods.<br><br><strong>🎒 The One-Room Schoolhouse</strong>: Small school with one room for all students aged 6-15. One teacher instructs everyone together.<br><br><strong>👨‍⚕️ The Doctor</strong>: Very few in the countryside. Travels many kilometers by horse-drawn carriage to treat patients at home.<br><br><strong>🔨 The Forge</strong>: The blacksmith repairs farm tools, horseshoes, and makes metal objects.<br><br><strong>🌾 The Mill</strong>: Farmers bring their grain to be made into flour. Some mills are water-powered, others wind-powered.<br><br><strong>📮 The Post Office</strong>: The mail carrier distributes mail. Newspapers arrive by train and are then distributed to villages.'
              }
            },
            {
              type: 'stats',
              stats: [
                { icon: '📚', value: '1', suffix: '', label: { fr: 'Salle par école', en: 'Room per school' }, percent: 25 },
                { icon: '🐴', value: '10+', suffix: 'km', label: { fr: 'Parcours du médecin', en: 'Doctor\'s travel' }, percent: 80 },
                { icon: '🏠', value: '7', suffix: '', label: { fr: 'Services essentiels', en: 'Essential services' }, percent: 100 }
              ]
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
              type: 'timeline',
              events: [
                { year: '🌸', icon: '🌱', text: { fr: 'Printemps : on sème dans les champs et on jardine', en: 'Spring: planting in the fields and gardening' } },
                { year: '☀️', icon: '🌻', text: { fr: 'Été : entretien des cultures et récoltes précoces', en: 'Summer: crop maintenance and early harvests' } },
                { year: '🍂', icon: '🌾', text: { fr: 'Automne : temps des récoltes principales', en: 'Autumn: main harvest season' } },
                { year: '❄️', icon: '🪵', text: { fr: 'Hiver : travail en forêt dans les chantiers', en: 'Winter: logging work in forest camps' } }
              ]
            },
            {
              type: 'diagram',
              title: { fr: 'L\'autosuffisance alimentaire', en: 'Food self-sufficiency' },
              layout: 'horizontal',
              nodes: [
                { text: { fr: '🌾 Cultures', en: '🌾 Crops' } },
                { text: { fr: '🐄 Animaux', en: '🐄 Animals' } },
                { text: { fr: '🍽️ Nourriture', en: '🍽️ Food' }, variant: 'success' }
              ]
            },
            {
              type: 'callout',
              variant: 'success',
              icon: '🌾',
              text: {
                fr: 'Les habitants produisent presque toute leur nourriture eux-mêmes! Ils achètent seulement la farine, le thé, le sel et le sucre au magasin général.',
                en: 'Rural families grew nearly all their own food! They only bought flour, tea, salt, and sugar from the general store.'
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
              type: 'progress-steps',
              steps: [
                { icon: '⛺', label: { fr: 'Campement temporaire', en: 'Temporary camp' }, completed: true },
                { icon: '🌲', label: { fr: 'Défricher la terre', en: 'Clear the land' }, completed: false, active: true },
                { icon: '🏠', label: { fr: 'Construire maison', en: 'Build house' }, completed: false },
                { icon: '🌾', label: { fr: 'Cultiver', en: 'Start farming' }, completed: false }
              ]
            },
            {
              type: 'diagram',
              title: { fr: 'Le travail de défrichement', en: 'Land clearing work' },
              nodes: [
                { text: { fr: '🌲 Arbres', en: '🌲 Trees' } },
                { text: { fr: '🪵 Branches', en: '🪵 Branches' } },
                { text: { fr: '🌳 Souches', en: '🌳 Stumps' } },
                { text: { fr: '🌾 Terre!', en: '🌾 Land!' }, variant: 'success' }
              ]
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
              type: 'gallery',
              image: '🪓',
              title: { fr: 'Les bûcherons en forêt', en: 'Lumberjacks in the Forest' },
              description: {
                fr: 'En hiver, de nombreux agriculteurs complètent leurs revenus en travaillant dans des chantiers forestiers. Au printemps, certains deviennent des draveurs qui descendent les billots de bois sur les rivières.',
                en: 'During winter, many farmers supplemented their income by working in logging camps. In spring, some became log drivers, guiding logs down rivers to the sawmill.'
              }
            },
            {
              type: 'stats',
              stats: [
                { icon: '❄️', value: '-30', suffix: '°C', label: { fr: 'Température', en: 'Temperature' }, percent: 90 },
                { icon: '🛏️', value: 'Many', suffix: '', label: { fr: 'Hommes/cabane', en: 'Men per cabin' }, percent: 80 },
                { icon: '🚫', value: 'Rare', suffix: '', label: { fr: 'Bains', en: 'Baths' }, percent: 15 }
              ]
            },
            {
              type: 'callout',
              variant: 'warning',
              icon: '❄️',
              text: {
                fr: 'La vie dans les chantiers est très dure. Les bains sont rares, les maladies se transmettent facilement. Il fait souvent très froid — certains se réveillent avec du givre sur la moustache!',
                en: 'Life in logging camps was grueling. Bathing was rare, diseases spread quickly. It was often bitterly cold — some men woke up with frost on their mustaches!'
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
