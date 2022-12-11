var loader = document.getElementById('loading');
window.addEventListener('load', function loadState(){
    loader.style.display = "none";
})


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() // + ":" + today.getSeconds();
var dateTime = date+' '+time;

const {createApp} = Vue;

createApp({
    data() {
        return {
            indexActive: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:20',
                            message: 'Bravo',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:22',
                            message: '😘😘',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:23',
                            message: 'Ci vediamo domani?',
                            status: 'received'
                        },{
                            date: '10/01/2020 23:22',
                            message: 'Rispondiiii',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35',
                            message: 'Ti faccio sapere 😀',
                            status: 'sent'
                        },
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15',
                            message: 'Ah scusa 😅',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'sorry',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_io',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Va bene',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'stasera la sento😘👍',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:55',
                            message: 'Di nulla 💕',
                            status: 'sent'
                        },
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giada',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao, come stai?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Bene e tu?',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Miriam',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 9:30',
                            message: 'Mi chiami?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 9:35',
                            message: 'Sto seguendo la lezione',
                            status: 'received'
                        }
                    ],
                }
            ],

            newMessage: "",

            contactLetters: "",
        }
    },

    methods: {
        // Func to click a contact
        clickContact(numAvatar){
            this.indexActive = numAvatar;

            //mobile
            document.getElementById("sect-chat-list").style.display = "none";
            document.getElementById("sect-chat-mess").style.display = "block";
        },

        // Func to send new message
        send(){
            this.contacts[this.indexActive].messages.push(
                {
                    date: time, 
                    message: this.newMessage, 
                    status: 'sent',
                    // visibleMess: true
                }
            );

            this.newMessage = "";

            // Func to receive answers after 1 second
            setTimeout(() => {

                // random answers
                const things = ['Ciaooo', 'Come stai??', 'Non mi va di parlare', 'Non scrivermi, grazie', 'Che vuoi?', 'Ti aspetto', 'Ci vediamo?', 'Finalmente mi scrivi'];
                let thing = things[Math.floor(Math.random()*things.length)];

                this.contacts[this.indexActive].messages.push(
                    {
                        date: time, 
                        message: thing,
                        status: 'received',
                        // visibleMess: true
                    }
                )

            }, 1200);
        },


        // Func to search a contact
        searchContact() {
            
            if (this.contactLetters == "") {
                for (let i = 0; i < this.contacts.length; i++){
                    this.contacts[i].visible = true;
                }
            } else {
                for (let i = 0; i < this.contacts.length; i++){
                    if (this.contactLetters !== this.contacts[i].name && this.contacts[i].visible == true) {
                        this.contacts[i].visible = false;
                    } else if (this.contactLetters == this.contacts[i].name && this.contacts[i].visible == false) {
                        this.contacts[i].visible = true;
                    }
                }
            }
                
        },


        // deleteForMe() {
        //     this.contacts[this.index].messages.visibleMess = false;
        // },


        // Func to go back in mobile
        goBack() {
            document.getElementById("sect-chat-list").style.display = "block";
            document.getElementById("sect-chat-mess").style.display = "none";
        }
    }

}).mount('#app')