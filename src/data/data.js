const viaggi = [
    {
        destinazione: "Roma",
        dataInizio: "2025-04-15",
        dataFine: "2025-04-20",
        partecipanti: [
            { nome: "Luca", cognome: "Rossi", email: "luca.rossi@example.com", telefono: "3456789012", cf: "RSSLCU85H15H501P" },
            { nome: "Sara", cognome: "Bianchi", email: "sara.bianchi@example.com", telefono: "3472233445", cf: "BCHSRA90A50H501M" },
            { nome: "Marco", cognome: "Verdi", email: "marco.verdi@example.com", telefono: "3489876543", cf: "VRDMRC88B57H501J" },
            { nome: "Giulia", cognome: "Neri", email: "giulia.neri@example.com", telefono: "3465566778", cf: "NRIGLU92C60H501G" },
            { nome: "Paolo", cognome: "Ferrari", email: "paolo.ferrari@example.com", telefono: "3491122334", cf: "FRRPLA80D15H501V" },
            { nome: "Francesca", cognome: "Russo", email: "francesca.russo@example.com", telefono: "3470099887", cf: "RSSFNC95E30H501F" },
            { nome: "Matteo", cognome: "Gallo", email: "matteo.gallo@example.com", telefono: "3456677889", cf: "GLLMTT87F15H501C" },
            { nome: "Elena", cognome: "Costa", email: "elena.costa@example.com", telefono: "3483344556", cf: "CSTLNE89G20H501U" },
            { nome: "Alessandro", cognome: "Fontana", email: "alessandro.fontana@example.com", telefono: "3462233445", cf: "FNTLSN91H12H501S" },
            { nome: "Chiara", cognome: "Marini", email: "chiara.marini@example.com", telefono: "3475566889", cf: "MRNCHR93L18H501R" },
            { nome: "Tommaso", cognome: "Ricci", email: "tommaso.ricci@example.com", telefono: "3453344556", cf: "RCCTMS88M10H501P" },
            { nome: "Valentina", cognome: "Gatti", email: "valentina.gatti@example.com", telefono: "3499988776", cf: "GTTVLN90N25H501X" }
        ]
    },
    {
        destinazione: "Parigi",
        dataInizio: "2025-05-02",
        dataFine: "2025-05-10",
        partecipanti: [
            { nome: "Andrea", cognome: "Moretti", email: "andrea.moretti@example.com", telefono: "3472211345", cf: "MRTNDR85A01H501Z" },
            { nome: "Laura", cognome: "Gentile", email: "laura.gentile@example.com", telefono: "3456677210", cf: "GNTLRA92D71H501G" },
            { nome: "Davide", cognome: "Lombardi", email: "davide.lombardi@example.com", telefono: "3489123456", cf: "LMBDVD88B22H501D" },
            { nome: "Marta", cognome: "Colombo", email: "marta.colombo@example.com", telefono: "3491234987", cf: "CLMMRT94C12H501E" },
            { nome: "Stefano", cognome: "De Luca", email: "stefano.deluca@example.com", telefono: "3468901234", cf: "DLCSFN90E18H501F" },
            { nome: "Alice", cognome: "Riva", email: "alice.riva@example.com", telefono: "3456623981", cf: "RVALCA95F20H501S" },
            { nome: "Filippo", cognome: "Galli", email: "filippo.galli@example.com", telefono: "3475567124", cf: "GLLFPP91G03H501N" },
            { nome: "Ilaria", cognome: "Marchetti", email: "ilaria.marchetti@example.com", telefono: "3481231234", cf: "MRCLRI90H15H501T" },
            { nome: "Cristian", cognome: "Sartori", email: "cristian.sartori@example.com", telefono: "3477700112", cf: "SRTCRS89L01H501Q" },
            { nome: "Erika", cognome: "Bianco", email: "erika.bianco@example.com", telefono: "3495432123", cf: "BNCERK96M18H501U" },
            { nome: "Fabio", cognome: "Pellegrini", email: "fabio.pellegrini@example.com", telefono: "3452399172", cf: "PLLFBA87N20H501S" },
            { nome: "Elisa", cognome: "Ferrero", email: "elisa.ferrero@example.com", telefono: "3467865243", cf: "FRRLSA94P18H501B" }
        ]
    },
    {
        destinazione: "Londra",
        dataInizio: "2025-06-10",
        dataFine: "2025-06-17",
        partecipanti: [
            { nome: "Giorgio", cognome: "Romano", email: "giorgio.romano@example.com", telefono: "3451239876", cf: "RMNGGG86A03H501O" },
            { nome: "Camilla", cognome: "Palmieri", email: "camilla.palmieri@example.com", telefono: "3487654321", cf: "PLMCLL92B15H501U" },
            { nome: "Riccardo", cognome: "Giordano", email: "riccardo.giordano@example.com", telefono: "3472234987", cf: "GRDRCR89C28H501M" },
            { nome: "Elisa", cognome: "Serra", email: "elisa.serra@example.com", telefono: "3491235667", cf: "SRRLSA90D12H501W" },
            { nome: "Lorenzo", cognome: "Donati", email: "lorenzo.donati@example.com", telefono: "3469001232", cf: "DNTLRN85E10H501U" },
            { nome: "Sofia", cognome: "Benvenuti", email: "sofia.benvenuti@example.com", telefono: "3451122987", cf: "BNVSFA95F18H501A" },
            { nome: "Leonardo", cognome: "Rossi", email: "leonardo.rossi@example.com", telefono: "3473212312", cf: "RSSLNR86D15H501H" },
            { nome: "Martina", cognome: "Mazza", email: "martina.mazza@example.com", telefono: "3485522311", cf: "MZZMTN91L30H501J" },
            { nome: "Gabriele", cognome: "Ricci", email: "gabriele.ricci@example.com", telefono: "3498877665", cf: "RCCGBR93M12H501E" },
            { nome: "Chiara", cognome: "Villa", email: "chiara.villa@example.com", telefono: "3456672311", cf: "VLLCHR88N10H501H" },
            { nome: "Matilde", cognome: "Ferraro", email: "matilde.ferraro@example.com", telefono: "3465577122", cf: "FRRMTL96P18H501P" },
            { nome: "Daniele", cognome: "Piras", email: "daniele.piras@example.com", telefono: "3479988122", cf: "PRSDNL85Q22H501B" }
        ]
    },
    {
        destinazione: "Barcellona",
        dataInizio: "2025-07-01",
        dataFine: "2025-07-08",
        partecipanti: [
            { nome: "Silvia", cognome: "Martinelli", email: "silvia.martinelli@example.com", telefono: "3472211789", cf: "MRTSLV88R15H501N" },
            { nome: "Gianluca", cognome: "Conti", email: "gianluca.conti@example.com", telefono: "3468877112", cf: "CNTGNL85S10H501C" },
            { nome: "Elena", cognome: "Ferrara", email: "elena.ferrara@example.com", telefono: "3453322110", cf: "FRRLNE94T05H501E" },
            { nome: "Vittorio", cognome: "Greco", email: "vittorio.greco@example.com", telefono: "3489987211", cf: "GRCVTR90T12H501F" },
            { nome: "Roberta", cognome: "Ruggiero", email: "rob rruggiero@example.com", telefono: "3476612378", cf: "RGRRBT92U15H501V" },
            { nome: "Federico", cognome: "Longo", email: "federico.longo@example.com", telefono: "3497845122", cf: "LNGFRC87V18H501H" },
            { nome: "Serena", cognome: "Pellegrini", email: "serena.pellegrini@example.com", telefono: "3455544332", cf: "PLLSRN90W21H501Z" },
            { nome: "Emanuele", cognome: "Riva", email: "emanuele.riva@example.com", telefono: "3479988120", cf: "RVMNLL85X22H501B" },
            { nome: "Beatrice", cognome: "Fontana", email: "beatrice.fontana@example.com", telefono: "3462231123", cf: "FNTBTR93Y30H501L" },
            { nome: "Cristina", cognome: "Gallo", email: "cristina.gallo@example.com", telefono: "3491122338", cf: "GLLCRS91Z12H501U" },
            { nome: "Luca", cognome: "Testa", email: "luca.testa@example.com", telefono: "3486677788", cf: "TSTLCU88A15H501P" },
            { nome: "Anna", cognome: "Fiore", email: "anna.fiore@example.com", telefono: "3471122333", cf: "FRNNNA92B10H501D" }
        ]
    },
    {
        destinazione: "Berlino",
        dataInizio: "2025-07-20",
        dataFine: "2025-07-27",
        partecipanti: [
            { nome: "Pietro", cognome: "Leone", email: "pietro.leone@example.com", telefono: "3496677788", cf: "LNEPTR85C15H501M" },
            { nome: "Giada", cognome: "Caruso", email: "giada.caruso@example.com", telefono: "3478877661", cf: "CRSGDA90D18H501N" },
            { nome: "Nicola", cognome: "Ferraro", email: "nicola.ferraro@example.com", telefono: "3458765123", cf: "FRRNCL88E10H501L" },
            { nome: "Alessia", cognome: "Monti", email: "alessia.monti@example.com", telefono: "3461112233", cf: "MNTLSS92F12H501J" },
            { nome: "Matilde", cognome: "Giusti", email: "matilde.giusti@example.com", telefono: "3484433211", cf: "GSTMTL89H18H501V" },
            { nome: "Roberto", cognome: "Serra", email: "roberto.serra@example.com", telefono: "3471122789", cf: "SRRRRT90I20H501U" },
            { nome: "Lucia", cognome: "De Angelis", email: "lucia.deangelis@example.com", telefono: "3456621834", cf: "DNGNLA95L18H501A" },
            { nome: "Alberto", cognome: "Piras", email: "alberto.piras@example.com", telefono: "3499988723", cf: "PRSALB85M22H501B" },
            { nome: "Claudia", cognome: "Vitale", email: "claudia.vitale@example.com", telefono: "3464411233", cf: "VTLCDA93N12H501C" },
            { nome: "Fabrizio", cognome: "Marinelli", email: "fabrizio.marinelli@example.com", telefono: "3476698921", cf: "MRNFBR91O15H501W" },
            { nome: "Sara", cognome: "Colombo", email: "sara.colombo@example.com", telefono: "3457765120", cf: "CLMSRA94Q30H501G" },
            { nome: "Giacomo", cognome: "Testa", email: "giacomo.testa@example.com", telefono: "3482345123", cf: "TSTGCM88R10H501F" }
        ]
    },
    {
        destinazione: "New York",
        dataInizio: "2025-08-12",
        dataFine: "2025-08-20",
        partecipanti: [
            { nome: "Ettore", cognome: "Negri", email: "ettore.negri@example.com", telefono: "3477721882", cf: "NGRRTR87S15H501O" },
            { nome: "Clara", cognome: "Mariani", email: "clara.mariani@example.com", telefono: "3452233421", cf: "MRNCLR90T18H501Y" },
            { nome: "Alessio", cognome: "Rizzo", email: "alessio.rizzo@example.com", telefono: "3494412388", cf: "RZZLSS92U30H501E" },
            { nome: "Nicole", cognome: "Ferrari", email: "nicole.ferrari@example.com", telefono: "3466677123", cf: "FRRNCL91V15H501K" },
            { nome: "Emanuela", cognome: "Longo", email: "emanuela.longo@example.com", telefono: "3458821193", cf: "LNGMNL94W10H501X" },
            { nome: "Stefano", cognome: "Fuentes", email: "stefano.fuentes@example.com", telefono: "3486623378", cf: "FNTSTF89X30H501Q" },
            { nome: "Michela", cognome: "Riva", email: "michela.riva@example.com", telefono: "3495532211", cf: "RVMCHL93Y15H501U" },
            { nome: "Alberto", cognome: "Testa", email: "alberto.testa@example.com", telefono: "3464432198", cf: "TSTLBT87Z12H501T" },
            { nome: "Rosanna", cognome: "De Luca", email: "rosanna.deluca@example.com", telefono: "3478821398", cf: "DLCRSN92A30H501B" },
            { nome: "Gianmarco", cognome: "Viti", email: "gianmarco.viti@example.com", telefono: "3459900112", cf: "VTIGNM91B22H501M" },
            { nome: "Luisa", cognome: "Pellegrino", email: "luisa.pellegrino@example.com", telefono: "3489988712", cf: "PLLMSL95C15H501S" },
            { nome: "Simone", cognome: "Ferraro", email: "simone.ferraro@example.com", telefono: "3462123431", cf: "FRRSMN88D25H501D" }
        ]
    },
    {
        destinazione: "Tokyo",
        dataInizio: "2025-09-05",
        dataFine: "2025-09-15",
        partecipanti: [
            { nome: "Danilo", cognome: "Greco", email: "danilo.greco@example.com", telefono: "3477211332", cf: "GRCDNL85E20H501O" },
            { nome: "Monica", cognome: "Santoro", email: "monica.santoro@example.com", telefono: "3495512233", cf: "SNTMNC90F22H501J" },
            { nome: "Andrea", cognome: "Vitale", email: "andrea.vitale@example.com", telefono: "3452211678", cf: "VTLNDR87G18H501K" },
            { nome: "Noemi", cognome: "Romani", email: "noemi.romani@example.com", telefono: "3489912787", cf: "RMNNME94H10H501Q" },
            { nome: "Lorenzo", cognome: "Ricci", email: "lorenzo.ricci@example.com", telefono: "3478825532", cf: "RCCLRN88I15H501P" },
            { nome: "Federica", cognome: "Fontana", email: "federica.fontana@example.com", telefono: "3459923122", cf: "FNTFRC91L18H501X" },
            { nome: "Giulio", cognome: "Ferrari", email: "giulio.ferrari@example.com", telefono: "3468871234", cf: "FRRGLI89M22H501C" },
            { nome: "Benedetta", cognome: "Conti", email: "benedetta.conti@example.com", telefono: "3493321187", cf: "CNTBNT93N30H501Y" },
            { nome: "Pietro", cognome: "Lodi", email: "pietro.lodi@example.com", telefono: "3479981254", cf: "LDOPTR85P15H501V" },
            { nome: "Michele", cognome: "Serra", email: "michele.serra@example.com", telefono: "3488876543", cf: "SRRMCL88R12H501H" },
            { nome: "Chiara", cognome: "De Santis", email: "chiara.desantis@example.com", telefono: "3456671235", cf: "DNTCHR90S18H501L" },
            { nome: "Giacomo", cognome: "Piras", email: "giacomo.piras@example.com", telefono: "3466675544", cf: "PRSGCM89T22H501O" }
        ]
    },
    {
        destinazione: "Sydney",
        dataInizio: "2025-10-18",
        dataFine: "2025-10-28",
        partecipanti: [
            { nome: "Francesco", cognome: "Coppola", email: "francesco.coppola@example.com", telefono: "3478923001", cf: "CPPFNC87U15H501C" },
            { nome: "Alice", cognome: "Milani", email: "alice.milani@example.com", telefono: "3498876611", cf: "MLNLCI91V22H501F" },
            { nome: "Matteo", cognome: "Ricci", email: "matteo.ricci@example.com", telefono: "3457865123", cf: "RCCMTT88A10H501W" },
            { nome: "Giada", cognome: "Pellegrini", email: "giada.pellegrini@example.com", telefono: "3485532110", cf: "PLLJDA95B12H501U" },
            { nome: "Federico", cognome: "Costa", email: "federico.costa@example.com", telefono: "3466612789", cf: "CSTFRC90C18H501Z" },
            { nome: "Serena", cognome: "Galli", email: "serena.galli@example.com", telefono: "3459922312", cf: "GLLSRN92D30H501P" },
            { nome: "Edoardo", cognome: "Riva", email: "edoardo.riva@example.com", telefono: "3476675432", cf: "RVDORD85E15H501S" },
            { nome: "Cristina", cognome: "Giordano", email: "cristina.giordano@example.com", telefono: "3497765123", cf: "GRDCRN93F28H501B" },
            { nome: "Giorgia", cognome: "Serra", email: "giorgia.serra@example.com", telefono: "3484432109", cf: "SRRGGR94G15H501H" },
            { nome: "Alberto", cognome: "Fiore", email: "alberto.fiore@example.com", telefono: "3466651234", cf: "FRLALB87H10H501A" },
            { nome: "Fabiana", cognome: "Martini", email: "fabiana.martini@example.com", telefono: "3479981123", cf: "MRTFBN90I18H501N" },
            { nome: "Diego", cognome: "Marini", email: "diego.marini@example.com", telefono: "3455544321", cf: "MRNDGO89L20H501T" }
        ]
    }
];

export default viaggi;