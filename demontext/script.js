weird_symbols = ['\u0300','\u0301','\u0302','\u0303','\u0304','\u0305','\u0306','\u0307','\u0308',
                 '\u0309','\u030a','\u030b','\u030c','\u030d','\u030f','\u0310','\u0311','\u0312',
                 '\u0313','\u0314','\u0315','\u0316','\u0317','\u0318','\u0319','\u031a','\u031b',
                 '\u031c','\u031d','\u031e','\u031f','\u030e','\u0320','\u0321','\u0322','\u0323',
                 '\u0324','\u0325','\u0326','\u0327','\u0328','\u0329','\u032a','\u032b','\u032c',
                 '\u032d','\u032e','\u032f','\u0330','\u0331','\u0332','\u0333','\u0334','\u0335',
                 '\u0336','\u0337','\u0338','\u0340','\u0341','\u0342','\u0343','\u0344','\u0345','\u0346','\u0347',
                 '\u0348','\u0349','\u034a','\u034b','\u034c','\u034d','\u034e','\u034f','\u0350',
                 '\u0351','\u0352','\u0353','\u0354','\u0355','\u0356','\u0357','\u0358','\u0359',
                 '\u035a','\u035b','\u035c','\u035d','\u035e','\u035f','\u0360','\u0361','\u0362']


slovar = {
    а:"аАа₳@α",
    б:"БббϬϭƃ",
    в:"Вввℬß",
    г:"Ггℾг",
    д:"Ддℊ∂д",
    е:"ЕеℰЄе",
    ё:"ЁёℰЄё",
    ж:"ЖжҖж",
    з:"ЗзՅз",
    и:"Ииนи",
    й:"ЙйŨйù",
    к:"КкҠкk",
    л:"Ллл",
    м:"Мммℳʍ",
    н:"Ннℍн",
    о:"Оо0о",
    п:"Пп⋒пՈ",
    р:"Ррℙр",
    с:"Ссℂс⊂ς",
    т:"Тт⍑тt",
    у:"УуYуyUu",
    ф:"Ффփф",
    х:"Ххх×א",
    ц:"ЦццԱ",
    ч:"Чччկ",
    ш:"ШшшשWw",
    щ:"Щщщպ",
    ъ:"ЪъъѢѣ",
    ы:"Ыыы",
    ь:"ЬььѢѣ",
    э:"Эээ∌∍",
    ю:"Ююю",
    я:"Яяяℝ",
    a:"Aaa₳@α",
    b:"Bbbℬß",
    c:"Cccℂ⊂ς",
    d:"Ddd∂",
    e:"EeeℰЄ",
    f:"Fffℱ∮",
    g:"Gggℊפ",
    h:"HhhℍℋЋℎ",
    i:"Iiiℐιᶖ",
    j:"Jjjᶖ",
    k:"KkkҠk",
    l:"Lllλℒ",
    m:"Mmmℳʍ",
    n:"Nnnℕη⋒",
    o:"Ooo0",
    p:"Ppℙp",
    q:"Qqℚqᶐ",
    r:"Rrℝrℜℛ",
    s:"Ss∫s$",
    t:"Tt⍑tt†",
    u:"Uuนu",
    v:"Vv√v∨",
    w:"WwШwшש",
    x:"Xx×xא",
    y:"YyУyу",
    z:"Zzℤzɀ",
}


function demonizer_func(normal_string, scale, letter_check){

    let demonic_string = ""
    let demonic_string_b = ""
    let demonic_letter = ""

    if(!letter_check){
        for(i = 0; i < normal_string.length; i++){
            try{
                demonic_letter = slovar[normal_string[i].toLowerCase()]
                demonic_letter = demonic_letter[Math.floor(Math.random() * demonic_letter.length)]
                demonic_string += demonic_letter
            }catch(err){
                demonic_string += normal_string[i]
            }
        }
    }else{
        demonic_string = normal_string
    }

    for(i = 0; i < demonic_string.length; i++){
        demonic_letter = ""
        if((Math.floor(Math.random() * 3)+1) <= scale){
            for(k = 0;k < 4**scale; k++){
                demonic_letter += weird_symbols[Math.floor(Math.random() * weird_symbols.length)]
            }

            demonic_string_b += (demonic_string[i] + demonic_letter) 
        }else{
            demonic_string_b += demonic_string[i]
        }
    }

    if(scale == 3){
        demonic_string_b = '☠' + demonic_string_b + '☠'
    }

    return demonic_string_b
}

function text_out_func(){
    const normal_string = document.querySelector("#text_in").value
    const scale = document.querySelector("input[type=range]").value
    const letter_check = document.querySelector("#letter_check").checked
    const text_out = document.querySelector("#text_out")

    text_out.value = demonizer_func(normal_string, scale, letter_check)
    
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", text_out_func)


console.log('a' + '\u0301')