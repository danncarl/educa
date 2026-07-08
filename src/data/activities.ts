import { Activity } from "../types";

export const initialActivities: Activity[] = [
  {
    id: "1",
    title: "Aventura das Vogais: Escrever e Colorir",
    category: "Alfabetização",
    description: "Atividade lúdica para identificação, escrita pontilhada e associação de palavras iniciadas pelas vogais A, E, I, O, U.",
    longDescription: "Uma atividade completa desenhada especialmente para crianças em fase de alfabetização e letramento. O material foca no reconhecimento fonético e visual das cinco vogais do alfabeto, oferecendo exercícios de cobrir pontilhados para coordenação motora fina e associação de imagens divertidas que começam com cada uma das letras.",
    ageRange: "4 a 6 anos",
    grade: "Educação Infantil & 1º Ano EF",
    bnccCode: "EF01LP02",
    objectives: [
      "Reconhecer o som das vogais na fala e na escrita.",
      "Associar as vogais ao som inicial de figuras ilustradas.",
      "Treinar a grafia em formato pontilhado para desenvolvimento motor fino."
    ],
    coverColor: "from-amber-400 to-orange-500",
    iconName: "BookOpen",
    pagesCount: 1,
    difficulty: "Fácil",
    worksheetType: "vogais"
  },
  {
    id: "2",
    title: "Somando com os Animais da Fazenda",
    category: "Matemática",
    description: "Somas ilustradas simples de 1 a 10 para desenvolvimento do raciocínio lógico-matemático de maneira divertida.",
    longDescription: "Utilizando simpáticos animaizinhos de uma fazenda, como vaquinhas, porquinhos e patinhos, esta atividade introduz os conceitos básicos de soma para crianças. Através do método visual de contagem e agrupamento, os pequenos resolvem adições de maneira intuitiva e prazerosa.",
    ageRange: "5 a 7 anos",
    grade: "1º Ano EF",
    bnccCode: "EF01MA06",
    objectives: [
      "Compreender a ideia de juntar e acrescentar quantidades.",
      "Praticar a contagem de elementos de 1 a 10.",
      "Escrever os numerais correspondentes aos resultados das operações básicas."
    ],
    coverColor: "from-sky-400 to-blue-600",
    iconName: "Calculator",
    pagesCount: 1,
    difficulty: "Médio",
    worksheetType: "soma"
  },
  {
    id: "3",
    title: "Caminhos e Curvas dos Insetos",
    category: "Coordenação Motora",
    description: "Treino de motricidade fina cobrindo tracejados ondulados, retos e em ziguezague com lápis ou giz.",
    longDescription: "Antes de dominar a escrita de letras e números, a criança precisa desenvolver a precisão de seus movimentos manuais. Este caderno de caminhos ajuda a abelha, a joaninha, o caracol e a borboleta a chegarem ao seu destino seguindo linhas de treino tracejadas de diferentes complexidades.",
    ageRange: "3 a 5 anos",
    grade: "Educação Infantil",
    bnccCode: "EI03CG05",
    objectives: [
      "Desenvolver a coordenação motora fina e controle do lápis.",
      "Estimular a paciência e a precisão do traçado sob linhas guias.",
      "Estimular a percepção espacial de direção e limites físicos da folha."
    ],
    coverColor: "from-emerald-400 to-teal-600",
    iconName: "Activity",
    pagesCount: 1,
    difficulty: "Fácil",
    worksheetType: "coord-motora"
  },
  {
    id: "4",
    title: "Colorindo e Aprendendo: Animais da Floresta",
    category: "Colorir",
    description: "Desenhos detalhados de leão, elefante e girafa com legenda numérica de cores para trabalhar percepção visual.",
    longDescription: "Uma clássica atividade de pintura guiada por números. Cada área dos desenhos fofos de animais selvagens possui um número associado a uma cor específica da legenda. Ótimo para associar números a cores, desenvolver concentração e controle do espaço gráfico da pintura.",
    ageRange: "3 a 6 anos",
    grade: "Educação Infantil",
    bnccCode: "EI03TS02",
    objectives: [
      "Trabalhar a percepção e identificação de números e suas cores correspondentes.",
      "Exercitar o controle de movimentos de pintura respeitando os limites da linha.",
      "Favorecer o relaxamento e o desenvolvimento artístico através da pintura."
    ],
    coverColor: "from-rose-400 to-pink-600",
    iconName: "Palette",
    pagesCount: 1,
    difficulty: "Fácil",
    worksheetType: "colorir"
  },
  {
    id: "5",
    title: "O Incrível Ciclo da Água na Natureza",
    category: "Ciências",
    description: "Atividade interativa para recortar, colar e identificar as fases do ciclo da água: evaporação, condensação e precipitação.",
    longDescription: "Uma atividade voltada para o Ensino Fundamental que explica o ciclo da água de forma ilustrativa. Os alunos recortam as plaquinhas com os termos científicos (Evaporação, Condensação, Precipitação, Transpiração) e colam nos locais corretos do desenho explicativo, consolidando o aprendizado prático.",
    ageRange: "7 a 9 anos",
    grade: "3º Ano EF",
    bnccCode: "EF03CI07",
    objectives: [
      "Compreender as etapas do ciclo hidrológico de forma visual e sequencial.",
      "Identificar as transformações dos estados físicos da água na natureza.",
      "Desenvolver a coordenação bimanual e de precisão através do corte e colagem."
    ],
    coverColor: "from-blue-400 to-indigo-600",
    iconName: "Droplet",
    pagesCount: 1,
    difficulty: "Difícil",
    worksheetType: "ciencias-agua"
  },
  {
    id: "6",
    title: "Explorando as Cores: Misturas Mágicas",
    category: "Artes",
    description: "Prática com tinta guache ou lápis de cor para descobrir cores secundárias a partir das primárias no papel.",
    longDescription: "Descubra como a alquimia das cores acontece no papel! Esta atividade experimental guia o aluno na pintura das áreas indicadas com as cores primárias (azul, amarelo, vermelho) e, em seguida, propõe a mistura física para preencher as áreas que se intersectam, revelando as cores secundárias de forma empírica.",
    ageRange: "5 a 8 anos",
    grade: "1º e 2º Ano EF",
    bnccCode: "EF01AR04",
    objectives: [
      "Compreender o conceito de cores primárias e secundárias.",
      "Praticar a mistura de cores para obter novos tons de forma experimental.",
      "Explorar elementos da linguagem visual (linha, forma, cor) no papel."
    ],
    coverColor: "from-purple-400 to-fuchsia-600",
    iconName: "Paintbrush",
    pagesCount: 1,
    difficulty: "Médio",
    worksheetType: "cores"
  },
  {
    id: "7",
    title: "Treino do Alfabeto Cursivo Elegante",
    category: "Caligrafia",
    description: "Linhas pautadas especiais com guia de movimento de caneta para aperfeiçoamento da caligrafia de letras maiúsculas e minúsculas.",
    longDescription: "Uma ficha técnica de alta legibilidade para treino da grafia cursiva. O modelo traz as setas indicadoras do traçado ideal para cada letra do alfabeto (A-Z) em formato bastão e cursivo, acompanhado de linhas pautadas calibradas para exercitar a escrita uniforme das letras maiúsculas e minúsculas.",
    ageRange: "6 a 8 anos",
    grade: "2º Ano EF",
    bnccCode: "EF02LP07",
    objectives: [
      "Aperfeiçoar a estética e fluidez da escrita em formato cursivo.",
      "Entender e diferenciar a proporção de letras maiúsculas e minúsculas na pauta.",
      "Praticar a orientação espacial e alinhamento na pauta de caligrafia tradicional."
    ],
    coverColor: "from-violet-400 to-indigo-700",
    iconName: "PenTool",
    pagesCount: 1,
    difficulty: "Médio",
    worksheetType: "caligrafia"
  },
  {
    id: "8",
    title: "Labirinto Lógico: Seguindo a Ordem dos Números",
    category: "Jogos Educativos",
    description: "Ajude o coelhinho a atravessar o labirinto conectando os numerais em ordem crescente de 1 a 20.",
    longDescription: "O coelhinho está faminto e precisa chegar até a cenoura gigante, mas o caminho está repleto de bifurcações! Para desvendar a rota correta, o aluno precisa pintar e seguir os tijolos numéricos em ordem sequencial de 1 a 20. Uma fantástica união de lógica de caminhos e fixação numérica.",
    ageRange: "5 a 7 anos",
    grade: "Educação Infantil & 1º Ano EF",
    bnccCode: "EF01MA01",
    objectives: [
      "Reconhecer e memorizar a sequência dos números naturais de 1 a 20.",
      "Estimular a resolução de problemas espaciais e antecipação de caminhos.",
      "Treinar o foco sustentado e atenção concentrada."
    ],
    coverColor: "from-orange-400 to-red-500",
    iconName: "Sparkles",
    pagesCount: 1,
    difficulty: "Médio",
    worksheetType: "labirinto"
  },
  {
    id: "9",
    title: "Dia da Árvore: Minha Colagem da Natureza",
    category: "Datas Comemorativas",
    description: "Desenho de tronco de árvore para trabalho sensorial de colagem com folhas secas, pedaços de papel ou algodão colorido.",
    longDescription: "Uma atividade para celebrar o meio ambiente e incentivar a consciência ecológica. Contém o contorno do tronco de uma bela árvore e galhos secos. A proposta é que as crianças criem a copa utilizando elementos tridimensionais, como folhas secas coletadas no pátio da escola, rasgaduras de papel verde ou bolinhas de crepom colorido.",
    ageRange: "3 a 6 anos",
    grade: "Educação Infantil",
    bnccCode: "EI03ET03",
    objectives: [
      "Reconhecer a importância das árvores e plantas na preservação da vida.",
      "Explorar texturas e relevos tridimensionais através de colagem tátil.",
      "Desenvolver a sensibilidade artística inspirada por elementos naturais reais."
    ],
    coverColor: "from-green-400 to-emerald-600",
    iconName: "TreePine",
    pagesCount: 1,
    difficulty: "Fácil",
    worksheetType: "dia-arvore"
  },
  {
    id: "10",
    title: "Descoberta das Formas Geométricas",
    category: "Educação Infantil",
    description: "Identifique e pinte círculos de vermelho, quadrados de azul, triângulos de verde e retângulos de amarelo.",
    longDescription: "As formas estão por todos os lados! Esta atividade ajuda as crianças a identificarem as formas geométricas planas mais comuns (círculo, quadrado, triângulo, retângulo) inseridas em um desenho divertido de uma paisagem. Colorindo cada forma de acordo com o código de cores, elas consolidam a discriminação visual e categorização espacial.",
    ageRange: "3 a 5 anos",
    grade: "Educação Infantil",
    bnccCode: "EI03ET05",
    objectives: [
      "Reconhecer, nomear e diferenciar círculo, quadrado, triângulo e retângulo.",
      "Praticar a correspondência de cores associando-as às respectivas formas.",
      "Trabalhar a percepção de figuras de fundo e composição visual espacial."
    ],
    coverColor: "from-cyan-400 to-teal-500",
    iconName: "Grid",
    pagesCount: 1,
    difficulty: "Fácil",
    worksheetType: "formas"
  },
  {
    id: "11",
    title: "Caligrafia: Praticando Frases Cursivas ✏️",
    category: "Caligrafia",
    description: "Uma apostila completa para treinar a escrita legível de frases em letra cursiva, fortalecendo a alfabetização e a leitura.",
    longDescription: "Uma excelente apostila focada no treino de caligrafia com letra cursiva. Traz dezenas de frases simples de animais, atividades e cenas do cotidiano para a criança cobrir o pontilhado e reescrever à mão, desenvolvendo a fluidez motora e a legibilidade.",
    ageRange: "6 a 8 anos",
    grade: "1º ao 3º Ano EF",
    bnccCode: "EF02LP07",
    objectives: [
      "Desenvolver a coordenação motora fina através da escrita cursiva.",
      "Treinar o traçado de frases completas respeitando o espaçamento na pauta escolar.",
      "Apoiar a leitura ativa e a cópia de enunciados simples."
    ],
    coverColor: "from-sky-400 to-indigo-500",
    iconName: "PenTool",
    pagesCount: 52,
    difficulty: "Médio",
    worksheetType: "caligrafia-frases"
  },
  {
    id: "12",
    title: "Caligrafia: Praticando Silabário Cursivo 🔤",
    category: "Caligrafia",
    description: "Exercícios divertidos de caligrafia cursiva das famílias silábicas e junções silábicas simples de A a Z.",
    longDescription: "Caderno completo para fixação das famílias silábicas em letra cursiva. A criança aprende a conectar as consoantes com as vogais de forma sistemática (Ba, Be, Bi, Bo, Bu, Bão...), estimulando a percepção fonética das palavras.",
    ageRange: "5 a 7 anos",
    grade: "Educação Infantil & 1º Ano EF",
    bnccCode: "EF01LP02",
    objectives: [
      "Fixar o traçado cursivo das famílias silábicas simples.",
      "Associar consoantes e vogais de forma fônica e gráfica.",
      "Estimular a alfabetização inicial através do toque caligráfico."
    ],
    coverColor: "from-purple-400 to-pink-500",
    iconName: "BookOpen",
    pagesCount: 22,
    difficulty: "Fácil",
    worksheetType: "caligrafia-silabario"
  },
  {
    id: "13",
    title: "Caderno de Grafomotricidade e Traçados 🌀",
    category: "Coordenação Motora",
    description: "Um mega caderno de 155 páginas com linhas onduladas, curvas, espirais e ziguezagues para os pequenos ganharem firmeza no lápis.",
    longDescription: "Este super caderno oferece uma enorme gama de exercícios para desenvolver a firmeza no manuseio de lápis, pincéis e gizes de cera. Contém caminhos retos, ziguezagues e espirais temáticos prontos para serem cobertos e coloridos.",
    ageRange: "3 a 5 anos",
    grade: "Educação Infantil",
    bnccCode: "EI03CG05",
    objectives: [
      "Aprimorar a coordenação motora e firmeza muscular manual.",
      "Treinar a concentração e o acompanhamento de trajetórias pontilhadas.",
      "Preparar os músculos da mão para o início da escrita formal."
    ],
    coverColor: "from-emerald-400 to-teal-500",
    iconName: "Activity",
    pagesCount: 155,
    difficulty: "Fácil",
    worksheetType: "caligrafia-coordenando"
  },
  {
    id: "14",
    title: "Caligrafia: Treinando Letras de Fôrma / Bastão 🔤",
    category: "Caligrafia",
    description: "Prática de escrita de letras bastão maiúsculas e minúsculas com ilustrações fofas de abelha, baleia e muito mais.",
    longDescription: "Ideal para os primeiros passos na caligrafia, este material ajuda no reconhecimento e traçado guiado das letras de fôrma (bastão), tanto maiúsculas quanto minúsculas. Inclui imagens divertidas para associar o fonema ao símbolo.",
    ageRange: "4 a 6 anos",
    grade: "Educação Infantil & 1º Ano EF",
    bnccCode: "EF01LP11",
    objectives: [
      "Praticar a grafia correta do alfabeto em letra bastão.",
      "Auxiliar na diferenciação de letras maiúsculas e minúsculas.",
      "Estimular o vocabulário por correspondência visual fofa."
    ],
    coverColor: "from-amber-400 to-orange-500",
    iconName: "PenTool",
    pagesCount: 62,
    difficulty: "Fácil",
    worksheetType: "caligrafia-bastao"
  },
  {
    id: "15",
    title: "Apostila de Caligrafia: Frases Curtas Cursivas 📝",
    category: "Caligrafia",
    description: "Treino prático de cópia e leitura contendo frases curtas e objetivas do cotidiano em formato cursivo pautado.",
    longDescription: "Esta apostila reúne frases amigáveis e curtas para as crianças copiarem e lerem com facilidade. Ideal para exercitar o espaçamento entre as palavras e a uniformidade da letra cursiva em pautas coloridas.",
    ageRange: "5 a 8 anos",
    grade: "1º ao 3º Ano EF",
    bnccCode: "EF02LP07",
    objectives: [
      "Desenvolver a legibilidade e uniformidade da escrita cursiva.",
      "Estimular a leitura contextualizada de pequenas frases descritivas.",
      "Favorecer o treino de pontuação básica de sentenças."
    ],
    coverColor: "from-rose-400 to-pink-500",
    iconName: "BookOpen",
    pagesCount: 16,
    difficulty: "Médio",
    worksheetType: "caligrafia-frases-curtas"
  },
  {
    id: "16",
    title: "Apostila de Letras do Alfabeto A-Z (Labirintos e Tracing) 🧩",
    category: "Alfabetização",
    description: "Desafios divertidos com labirintos e guias de escrita para cada letra do alfabeto, ideal para prender a atenção.",
    longDescription: "Uma excelente ferramenta lúdica de aprendizagem! Para cada letra de A a Z, a apostila traz um labirinto temático, uma área para a criança escrever palavras que iniciam com aquela letra e linhas para treinar a grafia.",
    ageRange: "4 a 6 anos",
    grade: "Educação Infantil & 1º Ano EF",
    bnccCode: "EF01LP10",
    objectives: [
      "Trabalhar o reconhecimento gráfico e fonético do alfabeto.",
      "Incentivar o foco mental e coordenação motora fina com labirintos de caminhos.",
      "Estimular o pensamento autônomo e formação de vocabulário."
    ],
    coverColor: "from-sky-400 to-cyan-500",
    iconName: "Grid",
    pagesCount: 26,
    difficulty: "Fácil",
    worksheetType: "letras-az"
  },
  {
    id: "17",
    title: "Caligrafia Matemática: Numerais e Contagem 🔢",
    category: "Matemática",
    description: "Apostila para cobrir números de 1 a 10, contar pipocas, organizar sequências numéricas e preencher vagões de trem.",
    longDescription: "Unindo coordenação motora e matemática inicial, esta apostila traz uma grande variedade de exercícios: tracejar os numerais, completar sequências em carros e trens, e resolver desafios fáceis de contagem.",
    ageRange: "4 a 6 anos",
    grade: "Educação Infantil & 1º Ano EF",
    bnccCode: "EF01MA01",
    objectives: [
      "Familiarizar o aluno com o traçado correto dos numerais de 1 a 10.",
      "Introduzir noções de quantidade, ordenamento e contagem de conjuntos.",
      "Praticar a lógica sequencial por meio de diagramas ilustrativos."
    ],
    coverColor: "from-blue-400 to-sky-500",
    iconName: "Calculator",
    pagesCount: 29,
    difficulty: "Fácil",
    worksheetType: "caligrafia-numerais"
  },
  {
    id: "18",
    title: "Hora da Leitura: Apostila das Sílabas Simples 📖",
    category: "Alfabetização",
    description: "Fichas coloridas interativas para recortar, montar palavras e treinar a leitura silábica de forma lúdica.",
    longDescription: "Este caderno traz fichas silábicas estruturadas para recorte e colagem. A criança associa cores de círculos para formar palavras como GA-TO, PA-TO, CA-SA e BO-LA, facilitando a transição da sílaba para a palavra.",
    ageRange: "5 a 7 anos",
    grade: "Educação Infantil & 1º Ano EF",
    bnccCode: "EF01LP08",
    objectives: [
      "Exercitar a junção fônica de sílabas na formação de palavras.",
      "Desenvolver o reconhecimento de famílias silábicas simples.",
      "Incentivar a leitura ativa de maneira tátil, dinâmica e interativa."
    ],
    coverColor: "from-amber-400 to-yellow-500",
    iconName: "BookOpen",
    pagesCount: 46,
    difficulty: "Fácil",
    worksheetType: "hora-leitura-simples"
  },
  {
    id: "19",
    title: "Jogo das Fichas Silábicas: Divisão de Palavras ✂️",
    category: "Jogos Educativos",
    description: "Cartões de recorte ilustrados com caixas de divisão silábica para classificar palavras dissílabas, trissílabas e polissílabas.",
    longDescription: "Excelente dinâmica para sala de aula! O aluno recorta os cartões contendo imagens de abacate, banana, coelho, etc., e preenche as caixas correspondentes a cada sílaba, aprendendo a contar e dividir os sons orais.",
    ageRange: "5 a 8 anos",
    grade: "1º ao 3º Ano EF",
    bnccCode: "EF01LP06",
    objectives: [
      "Compreender o conceito de sílaba como unidade sonora.",
      "Praticar a segmentação de palavras em sílabas.",
      "Favorecer a classificação de palavras pelo número de sílabas."
    ],
    coverColor: "from-teal-400 to-emerald-500",
    iconName: "Scissors",
    pagesCount: 17,
    difficulty: "Fácil",
    worksheetType: "fichas-silabicas"
  },
  {
    id: "20",
    title: "Jogo das Sílabas Complexas 🌟",
    category: "Jogos Educativos",
    description: "Cartões interativos focados nas sílabas mais complexas (LH, NH, CH, CR, CL, TR) para ampliação do vocabulário.",
    longDescription: "Uma apostila avançada de cartões recortáveis. Trabalha dígrafos e encontros consonantais na formação de palavras maiores como CHO-CO-LA-TE, CA-CHOR-RO, BI-CI-CLE-TA e ME-LAN-CIA.",
    ageRange: "6 a 9 anos",
    grade: "1º ao 4º Ano EF",
    bnccCode: "EF02LP02",
    objectives: [
      "Reconhecer e escrever palavras com encontros consonantais e dígrafos.",
      "Ampliar o vocabulário por meio de desafios silábicos coloridos.",
      "Estimular a leitura de fonemas de maior complexidade ortográfica."
    ],
    coverColor: "from-indigo-400 to-violet-500",
    iconName: "Sparkles",
    pagesCount: 20,
    difficulty: "Médio",
    worksheetType: "silabas-complexas"
  },
  {
    id: "21",
    title: "Apostila de Fluência Leitora e Pirâmides 📖",
    category: "Alfabetização",
    description: "Treino inovador de pirâmides de palavras para expandir o campo visual e acelerar o ritmo de leitura oral.",
    longDescription: "As pirâmides de leitura ajudam a criança a ler de forma contínua e rítmica. A frase cresce a cada linha (A / A ANA / A ANA ADORA / A ANA ADORA AVENTURAS...), exercitando a percepção visual rápida e respiração na fala.",
    ageRange: "6 a 9 anos",
    grade: "1º ao 3º Ano EF",
    bnccCode: "EF12LP01",
    objectives: [
      "Promover a fluência, ritmo e entonação na leitura em voz alta.",
      "Reduzir a fragmentação de palavras na decodificação de sentenças.",
      "Consolidar a autoconfiança no hábito de leitura."
    ],
    coverColor: "from-orange-400 to-rose-500",
    iconName: "BookOpen",
    pagesCount: 15,
    difficulty: "Médio",
    worksheetType: "fluencia-leitora"
  },
  {
    id: "22",
    title: "Caderno de Grafismos Fonéticos - Nível 3 🎨",
    category: "Educação Infantil",
    description: "Atividades completas de grafia de vogais e fonemas avançados combinando símbolos e pauta caligráfica colorida.",
    longDescription: "Focado no letramento fônico avançado, este caderno guia o aluno a associar símbolos gráficos e cores a fonemas específicos. Estimula a decodificação minuciosa das letras em pauta pedagógica.",
    ageRange: "6 a 8 anos",
    grade: "1º ao 3º Ano EF",
    bnccCode: "EF01LP02",
    objectives: [
      "Trabalhar a segmentação e codificação fonológica avançada.",
      "Estimular a correspondência grafofonêmica sistemática.",
      "Preencher dados caligráficos com o apoio de códigos geométricos coloridos."
    ],
    coverColor: "from-rose-400 to-pink-500",
    iconName: "Palette",
    pagesCount: 33,
    difficulty: "Difícil",
    worksheetType: "grafismos-nivel3"
  },
  {
    id: "23",
    title: "Caderno de Grafismos Fonéticos - Nível 2 🎨",
    category: "Educação Infantil",
    description: "Exercícios intermediários de associação de fonemas básicos (/p/, /b/, /m/, /t/) com diagramas ilustrativos.",
    longDescription: "Nível intermediário da coleção de Grafismos Fonéticos. Atividades pensadas para a transição silábica inicial, introduzindo exercícios visuais que facilitam a fixação de palavras como PATO, BOLA, MALA e SAPATO.",
    ageRange: "5 a 7 anos",
    grade: "Educação Infantil & 1º Ano EF",
    bnccCode: "EF01LP03",
    objectives: [
      "Praticar o reconhecimento de fonemas oclusivos e nasais.",
      "Desvendar as partes formadoras das palavras por correspondência de símbolos.",
      "Estimular a grafomotricidade e letramento simultaneamente."
    ],
    coverColor: "from-sky-400 to-cyan-500",
    iconName: "Palette",
    pagesCount: 62,
    difficulty: "Médio",
    worksheetType: "grafismos-nivel2"
  },
  {
    id: "24",
    title: "Caderno de Grafismos Fonéticos - Nível 1 🎨",
    category: "Educação Infantil",
    description: "Introdução lúdica às vogais e consoantes iniciais com cores e formatos geométricos divertidos.",
    longDescription: "Perfeito para a primeira fase da alfabetização, este material introduz as vogais e junções de sons de forma extremamente visual, associando círculos, triângulos e setas coloridas a cada sílaba sonora.",
    ageRange: "4 a 6 anos",
    grade: "Educação Infantil",
    bnccCode: "EI03ET05",
    objectives: [
      "Identificar auditiva e visualmente as cinco vogais.",
      "Estimular o desenvolvimento cognitivo por categorização geométrica.",
      "Promover a associação primária de sons e escrita."
    ],
    coverColor: "from-amber-400 to-yellow-500",
    iconName: "Palette",
    pagesCount: 50,
    difficulty: "Fácil",
    worksheetType: "grafismos-nivel1"
  },
  {
    id: "25",
    title: "Meu Caderno de Leitura: Sílabas, Palavras e Textos 📚",
    category: "Alfabetização",
    description: "Um completo guia de leitura contendo diagramas de articulação bucal fônicos, palavras organizadas de A a Z e historinhas.",
    longDescription: "Um dos materiais mais completos da biblioteca! Contém guias articulatórios ('boquinhas de fonoaudiologia') para ensinar a pronúncia física de cada letra, listas de treino de leitura e historinhas cativantes de animais para ler e colorir.",
    ageRange: "5 a 8 anos",
    grade: "Jardim II ao 3º Ano EF",
    bnccCode: "EF15LP18",
    objectives: [
      "Apoiar o processo de fonoaudiologia e dicção infantil na alfabetização.",
      "Oferecer uma base sólida de treino de leitura sistemática das letras.",
      "Propor a leitura de pequenos textos narrativos lúdicos."
    ],
    coverColor: "from-indigo-400 to-blue-500",
    iconName: "BookOpen",
    pagesCount: 67,
    difficulty: "Médio",
    worksheetType: "caderno-leitura"
  },
  {
    id: "26",
    title: "Meu Caderno de Interpretação de Textos 📖",
    category: "Português",
    description: "Histórias fofas ilustradas acompanhadas de 5 perguntas lúdicas de interpretação e compreensão de texto.",
    longDescription: "Trabalhe a interpretação textual de forma dinâmica! O caderno reúne contos sobre o Leão Léo, a Baleia Juba, a Girafa Curiosa e outros amiguinhos, seguidos de questões fáceis de localização de fatos e escrita criativa.",
    ageRange: "6 a 9 anos",
    grade: "1º ao 3º Ano EF",
    bnccCode: "EF15LP03",
    objectives: [
      "Desenvolver a leitura autônoma e compreensão de narrativas curtas.",
      "Localizar informações explícitas no corpo do texto.",
      "Exercitar a elaboração escrita de respostas completas."
    ],
    coverColor: "from-teal-400 to-cyan-500",
    iconName: "BookOpen",
    pagesCount: 8,
    difficulty: "Médio",
    worksheetType: "interpretacao-textos"
  },
  {
    id: "27",
    title: "Recorte e Monte: Letras do Alfabeto Divertido 🧩",
    category: "Educação Infantil",
    description: "Atividade interativa de arte para recortar e montar cada letra do alfabeto em formato de animais decorativos.",
    longDescription: "Artesanato e letramento juntos! Cada letra maiúscula é ilustrada com partes de um bichinho (A de Alligator, B de Bear, C de Clown...) para a criança colorir, recortar e colar, montando um incrível alfabeto decorativo.",
    ageRange: "3 a 6 anos",
    grade: "Educação Infantil",
    bnccCode: "EI03TS02",
    objectives: [
      "Unir coordenação motora de recorte ao reconhecimento das formas das letras.",
      "Fomentar a criatividade e a colagem artística.",
      "Criar estímulos táteis no processo de apropriação do alfabeto."
    ],
    coverColor: "from-pink-400 to-orange-400",
    iconName: "Scissors",
    pagesCount: 28,
    difficulty: "Fácil",
    worksheetType: "letras-vazadas"
  },
  {
    id: "28",
    title: "Treinando a Coordenação Motora Fina: Linhas e Cores 🌈",
    category: "Coordenação Motora",
    description: "Exercícios divertidos de tracejado e pintura de animais fofinhos de acordo com as direções das setas.",
    longDescription: "Um caderno ilustrado com abelhinhas, dinossauros e peixinhos. A criança deve cobrir os traçados para uni-los à sua comida ou casinha, e depois pintar os desenhos com suas cores favoritas.",
    ageRange: "3 a 5 anos",
    grade: "Educação Infantil",
    bnccCode: "EI03CG05",
    objectives: [
      "Exercitar o controle visomotor refinado e precisão gráfica.",
      "Orientar o sentido correto da escrita (esquerda para a direita).",
      "Estimular a expressão artística e concentração."
    ],
    coverColor: "from-purple-400 to-indigo-500",
    iconName: "Activity",
    pagesCount: 13,
    difficulty: "Fácil",
    worksheetType: "coord-fina"
  },
  {
    id: "29",
    title: "Atividades de Língua Portuguesa: Dígrafos LH, NH e CH ✍️",
    category: "Português",
    description: "Fichas completas de ortografia, silabação e escrita focadas na correta utilização dos dígrafos LH, NH e CH.",
    longDescription: "Apostila didática para auxiliar na transição para a escrita ortográfica correta. Traz explicações acessíveis para crianças, seguidas de tabelas de completar, caixas de separação de sílabas e exercícios de ligar colunas.",
    ageRange: "6 a 9 anos",
    grade: "1º ao 4º Ano EF",
    bnccCode: "EF02LP02",
    objectives: [
      "Identificar e grafar corretamente palavras com os dígrafos LH, NH e CH.",
      "Diferenciar sonoridades orais e nasais de forma intuitiva.",
      "Reforçar a ortografia padrão e estruturação vocabular."
    ],
    coverColor: "from-emerald-400 to-cyan-500",
    iconName: "BookOpen",
    pagesCount: 9,
    difficulty: "Médio",
    worksheetType: "digrafos"
  },
  {
    id: "30",
    title: "Português em Resumos: Flashcards & Citações 💡",
    category: "Português",
    description: "Cartões informativos de dicas gramaticais rápidas (Crase, Hífen, Ortografia) e citações consagradas para redações do ENEM e concursos.",
    longDescription: "Um excelente material de apoio pedagógico para professores e alunos mais velhos. Contém flashcards com diagramas e resumos de uso da vírgula, concordância nominal, regência, figuras de linguagem, além de citações estratégicas estruturadas.",
    ageRange: "10 anos ou mais",
    grade: "Ensino Fundamental II, Ensino Médio & Professores",
    bnccCode: "EF09LP04",
    objectives: [
      "Disponibilizar uma ferramenta de estudo visual e rápido para a norma culta.",
      "Facilitar o aprendizado de regras ortográficas, de regência e crase.",
      "Fornecer referências e citações relevantes para redações de alto nível."
    ],
    coverColor: "from-amber-400 to-rose-500",
    iconName: "Sparkles",
    pagesCount: 26,
    difficulty: "Difícil",
    worksheetType: "portugues-resumos"
  },
  {
    id: "31",
    title: "Questões Gabaritadas de Língua Portuguesa 🏆",
    category: "Português",
    description: "Simulado com questões oficiais de concursos públicos e vestibulares com gabarito comentado pelos melhores professores.",
    longDescription: "Para formação e apoio dos professores da instituição ou alunos avançados, este PDF reúne questões de bancas renomadas como FGV, FCC, CEBRASPE, VUNESP e IBFC com explicações morfológicas e sintáticas detalhadas de cada gabarito.",
    ageRange: "Formação Docente / Concursos",
    grade: "Professores & Candidatos",
    bnccCode: "Formação Docente",
    objectives: [
      "Exercitar e certificar o conhecimento gramatical e linguístico.",
      "Analisar o padrão de cobrança das principais bancas organizadoras de exames.",
      "Disponibilizar explicações estruturadas passo a passo para cada resposta."
    ],
    coverColor: "from-blue-500 to-slate-700",
    iconName: "GraduationCap",
    pagesCount: 200,
    difficulty: "Difícil",
    worksheetType: "portugues-concursos"
  }
];

export const allCategories = [
  "Todos",
  "Alfabetização",
  "Português",
  "Matemática",
  "Coordenação Motora",
  "Colorir",
  "Ciências",
  "Artes",
  "Caligrafia",
  "Jogos Educativos",
  "Datas Comemorativas",
  "Educação Infantil"
];
