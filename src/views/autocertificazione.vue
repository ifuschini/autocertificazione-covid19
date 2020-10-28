<template>
    <div class="dichiarazione">
    <br/>
    <center>
    <div class="title">
    <img src="images/docs.png" class="imageIcon"><br/>
    AUTODICHIARAZIONE AI SENSI DEGLI ARTT. 46, 47 e 76 D.P.R N. 445/2000
    </div>
    <table width="90%">
    <tr>
    <td style="max-width:450px">
    <b-container class="bv-example-row" fluid="sm">
        <b-row class="mb-2" align="left">
            <b-col>
            Il sottoscritto
                <b-form-input v-model.lazy="registry.sottoscritto" v-debounce="delay" placeholder="Inserire nome e cognome" ></b-form-input>
            </b-col>
        </b-row>
        <hr/>
        <b-row class="mb-2 color-row" align="left" >
        <b-col lg="5">
            Nato/a il:
            <b-form-datepicker id="example-datepicker" v-model="registry.natoil" 
            :date-format-options="{ year: 'numeric', day: '2-digit',month: '2-digit' }"
            locale="it"
            placeholder="Inserire la data"
            class="mb-2"></b-form-datepicker>
        </b-col>
        <b-col lg="5">
            a:
            <b-form-input list="my-list-id" v-model="registry.natoa"  placeholder="inserire" ></b-form-input>
            <datalist id="my-list-id">
                <option v-for="(comune,index) in arrayComuni" v-bind:key="index">{{ comune }}</option>
            </datalist>



        </b-col>
        <b-col lg="2" class="column">
            Provincia:
            <b-form-input v-model="registry.provincia" placeholder="inserire" size="2"></b-form-input>
        </b-col>
    </b-row>
        <hr/>
        <b-row class="mb-2 color-row" align="left">
        <b-col lg="3">
        Residente in:
            <b-form-input list="my-list-id2" v-model="registry.residenteIn" placeholder="inserire" ></b-form-input>
            <datalist id="my-list-id2">
                <option v-for="(comune,index) in arrayComuni" v-bind:key="index">{{ comune }}</option>
            </datalist>
        </b-col>
        <b-col lg="2">
        Provincia:
            <b-form-input v-model="registry.residenteProvincia" placeholder="inserire" ></b-form-input>
        </b-col>
        <b-col lg="7" class="column">
        Indirizzo:
            <b-form-input v-model.lazy="registry.residenteVia" v-debounce="delay" placeholder="inserire" ></b-form-input>
        </b-col>
    </b-row>
    <hr/>
    <b-row class="mb-2 color-row" align="left">
        <b-col lg="3">
        Domiciliato in:
            <b-form-input list="my-list-id3" v-model="registry.domiciliatoIn" placeholder="inserire" ></b-form-input>
            <datalist id="my-list-id3">
                <option v-for="(comune,index) in arrayComuni" v-bind:key="index">{{ comune }}</option>
            </datalist>
        </b-col>
        <b-col lg="2" >
        Provincia:
            <b-form-input v-model="registry.domiciliatoProvincia" placeholder="inserire" ></b-form-input>
        </b-col>
        <b-col lg="7" class="column">
        Indirizzo:
            <b-form-input v-model.lazy="registry.domiciliatoVia" v-debounce="delay" placeholder="inserire" ></b-form-input>
        </b-col>
    </b-row>
    <hr/>
    
    <b-row class="mb-2 color-row" align="left">
        <b-col>
            <b-row class="mb-2" align="left">
                <b-col lg="4">
                Identificato/a a mezzo:
                    <b-form-select v-model.lazy="registry.identificativo" v-debounce="delay" :options="tipoDocumento" placeholder="seleziona"></b-form-select>
                </b-col>
                <b-col lg="4">
                Numero del documento:
                    <b-form-input v-model.lazy="registry.identificativoN" v-debounce="delay" placeholder="n." ></b-form-input>
                </b-col>
                <b-col lg="4">
                Rilasciato da:
                    <b-form-input v-model.lazy="registry.identificativoRilasciato" v-debounce="delay" placeholder="rilasciato da" ></b-form-input>
                </b-col>
            </b-row>
            <b-row class="mb-2" align="left">
                <b-col lg="6">
                Data di Rilascio
                    <b-form-datepicker id="example-datepicker2" v-model="registry.identificativoData" 
                    :date-format-options="{ year: 'numeric', day: '2-digit',month: '2-digit' }"
                    locale="it"
                    placeholder="inserire la data"
                    class="mb-2"></b-form-datepicker>
                </b-col>
                <b-col lg="6">
            Utenza telefonica
                    <b-form-input v-model.lazy="registry.utenzatelefonica" v-debounce="delay" placeholder="inserire un numero telefonico" ></b-form-input>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
    <hr/>
    <b-row class="mb-2">
        <b-col align="left">
            <ul class="list-unstyled">
                <b-iconstack font-scale="1">
                    <b-icon stacked icon="square"></b-icon>
                    <b-icon stacked icon="arrow-right-short"></b-icon>
                    </b-iconstack>
                    <b> di non essere sottoposto/a alla misura della quarantena anche in conseguenza dell’accertamento della positività al COVID-19 ovvero ad altra misura sanitaria di contenimento del contagio</b>(fatti salvi gli spostamenti disposti dalle Autorità sanitarie);
            </ul>
            <ul class="list-unstyled">
                <b-iconstack font-scale="1">
                    <b-icon stacked icon="square"></b-icon>
                    <b-icon stacked icon="arrow-right-short"></b-icon>
                    </b-iconstack>
                <b> di essere a conoscenza delle misure normative di contenimento del contagio da COVID-19 vigenti alla data odierna, concernenti le limitazioni alla possibilità di spostamento delle persone fisiche all’interno del territorio nazionale;</b>
            </ul>
            <ul class="list-unstyled">
                <b-iconstack font-scale="1">
                    <b-icon stacked icon="square"></b-icon>
                    <b-icon stacked icon="arrow-right-short"></b-icon>
                    </b-iconstack>
                <b> di essere a conoscenza delle altre misure e limitazioni previste da ordinanze o altri provvedimenti amministrativi adottati dal Presidente della Regione o dal Sindaco ai sensi delle vigenti normative;</b>
            </ul>
            <ul class="list-unstyled">
                <b-iconstack font-scale="1">
                    <b-icon stacked icon="square"></b-icon>
                    <b-icon stacked icon="arrow-right-short"></b-icon>
                    </b-iconstack>
                <b> di essere a conoscenza delle sanzioni previste dall’art. 4 del decreto-legge 25 marzo 2020, n. 19, e dall’art. 2 del decreto-legge 16 maggio 2020, n. 33;</b>            
            </ul>
        </b-col>
     </b-row>
     <hr/>
    <b-row class="mb-2 color-row">
        <b-col>
            <b-row class="mb-2">    
            <b-col align="left">
                <b-form-group label="che lo spostamento è determinato da">
                <b-form-radio v-model.lazy="registry.spostamento" v-debounce="delay" name="some-radios" value="A"><b>comprovate esigenze lavorative </b></b-form-radio>
                <b-form-radio v-model.lazy="registry.spostamento" v-debounce="delay" name="some-radios" value="B"><b>motivi di salute</b></b-form-radio>
                <b-form-radio v-model.lazy="registry.spostamento" v-debounce="delay" name="some-radios" value="C"><b>altri motivi ammessi dalle vigenti normative ovvero dai predetti decreti, ordinanze e altri provvedimenti che definiscono le misure di prevenzione della diffusione del contagio; </b>(specificare il motivo che determina lo spostamento):</b-form-radio>
                <b-form-input v-model.lazy="registry.motivoSpostamento" v-debounce="delay" placeholder="" v-if="registry.spostamento=='C'"></b-form-input>
                </b-form-group>
            </b-col>
            </b-row>
            <b-row class="mb-2">
                <b-col align="left">
                    che lo spostamento è iniziato da:
                    <b-form-input v-model.lazy="registry.spostamentoInizio" v-debounce="delay" placeholder="indicare l’indirizzo da cui è iniziato" ></b-form-input>
                </b-col>
            </b-row>
            <b-row class="mb-2">
                <b-col align="left">
                    con destinazione:
                    <b-form-input v-model.lazy="registry.spostamentoDestinazione" v-debounce="delay" placeholder="indicare l’indirizzo di destinazione" ></b-form-input>
                </b-col>
            </b-row>
            <b-row class="mb-2">
                <b-col align="left">
                    in merito allo spostamento, dichiara inoltre che :
                    <b-form-input v-model.lazy="registry.dichiarazioneSpostamento" v-debounce="delay" placeholder="" ></b-form-input>
                </b-col>
            </b-row>
        </b-col>
    </b-row>


    </b-container>
    </td>
    <td valign="top" width="auto">
    <iframe ref="iframe" class="iframeClass"></iframe>
    </td>
    </tr>
    </table>
    </center>
    <div class="footer-cat">
            <b-button v-on:click="downloadPdf()" variant="info" style="margin-left:10px">Scarica autocertificazione </b-button>
    </div>
    </div>
</template>
<style scoped>
.dichiarazione {
    color:rgb(3, 130, 248);
}
.title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
}
.imageIcon {
    width: 4.5rem;
    height: 4.5rem;
}
.templateImg {
    max-width:"200px";
    height: auto;
}
.iframeClass {
      width: 100vw;; 
      height:100vw; 
      max-width:600px; 
      max-height:850px; 
      border-color: rgb(3, 130, 248);
      border: 10px solid rgb(3, 130, 248);
      border-radius: 10px;
}
@media only screen and (max-width: 600px) {
    .dichiarazione {
        color: rgb(61, 59, 59);
    }
    .imageIcon {
        width: 2.5rem;
        height: 2.5rem;
    }
    .iframeClass {
        width:0; 
        height:0; 
        border:0; 
        border:none;
    }
    .title {
        font-size: 9px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .color-row {
        background-color:rgb(159, 241, 241);
        border-radius: 10px;
    }
    .column {
        margin-bottom: 10px
    }
}
@media only screen and (orientation:landscape) and (max-width:850px) {
    .dichiarazione {
        color: rgb(61, 59, 59);
    }
    .imageIcon {
        width: 2.5rem;
        height: 2.5rem;
    }
    .iframeClass {
        width: 100vw;; 
        height:100vw; 
        max-width:500px; 
        max-height:850px; 
        border-color: rgb(3, 130, 248);
        border: 10px solid rgb(3, 130, 248);
        border-radius: 10px;
    }
    .title {
        font-size: 9px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .color-row {
        background-color:rgb(159, 241, 241);
        border-radius: 10px;
    }
    .column {
        margin-bottom: 10px
    }
}
@media only screen and (max-width: 1280px) {
    .dichiarazione {
        color: rgb(61, 59, 59);
    }
    .imageIcon {
        width: 2.5rem;
        height: 2.5rem;
    }
    .iframeClass {
        width:0; 
        height:0; 
        border:0; 
        border:none;
    }
    .title {
        font-size: 9px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .color-row {
        background-color:rgb(159, 241, 241);
        border-radius: 10px;
    }
    .column {
        margin-bottom: 10px
    }
}
.footer-cat {
        background-color: #f5f5f5;
        text-align: -webkit-center;
        position:fixed;
        width: 100%;
        bottom:0px;
        clear:both;
}
.dichiarazione {
    margin-bottom: 50px;
}
</style>>
<script>
import PDFDocument from 'pdfkit/js/pdfkit.standalone'

import blobStream from "blob-stream"
//import plainAddPlaceholder from 'node-signpdf/dist/helpers/plainAddPlaceholder';
import axios from 'axios'
import debounce from 'v-debounce'



export default {

    data() {
        return {
            delay: 4000,
            imagePdf: null,
            bufferStreamPdf: null,
            comuni:[],
            arrayComuni:[],           
            tipoDocumento: [
                {
                    value:"",
                    text:"seleziona un documento"
                },
                {
                    value:"Patente",
                    text:"Patente"
                },
                {
                    value:"Carta Identità",
                    text:"Carta Identità"
                },
                {
                    value:"Passaporto",
                    text:"Passaporto"
                }
            ],
            registry: {
                sottoscritto:'',
                nato:'',
                natoil:'',
                natoilDDMMYYYY:'',
                natoa:'',
                provincia:'',
                residenteIn:'',
                residenteProvincia:'',
                residenteVia:'',
                domiciliatoIn:'',
                domiciliatoProvincia:'',
                domiciliatoVia:'',
                identificativo:'',
                identificativoN:'',
                identificativoRilasciato:'',
                identificativoData:'',
                identificativoDataDDMMYYYY:'',
                utenzatelefonica:'',
                spostamento:'',
                motivoSpostamento:'',
                spostamentoInizio:'',
                spostamentoDestinazione:'',
                dichiarazioneSpostamento:'',           }
        }
    },
    created() {
        if (localStorage.registry) this.registry=JSON.parse(localStorage.registry)
        this.getConfigJson()
        this.getComuni()
        this.$gtag.event('autocertificazione', { method: 'Google' })
    }, 
    watch: {
        "registry.sottoscritto" () {
            this.createSimplePdf()
        },
        "registry.nato" () {
            this.createSimplePdf()
        },
        "registry.residenteVia" () {
            this.createSimplePdf()
        },
        "registry.domiciliatoVia" () {
            this.createSimplePdf()
        },
        "registry.identificativo" () {
            this.createSimplePdf()
        },
        "registry.identificativoN" () {
            this.createSimplePdf()
        },
        "registry.sottoscritto" () {
            this.createSimplePdf()
        },
        "registry.utenzatelefonica" () {
            this.createSimplePdf()
        },
        "registry.spostamento" () {
            console.log(this.registry.spostamento)
            if (this.registry.spostamento!="C") this.registry.motivoSpostamento=''
            this.createSimplePdf()
        },
        "registry.motivoSpostamento" () {
            this.createSimplePdf()
        },
        "registry.spostamentoInizio" () {
            this.createSimplePdf()
        },
        "registry.spostamentoDestinazione" () {
            this.createSimplePdf()
        },
        "registry.dichiarazioneSpostamento" () {
            this.createSimplePdf()
        },
        "registry.natoa" () {
            let arrayFound=this.comuni.filter(v => v.n.toUpperCase()==this.registry.natoa.toUpperCase())
            if (arrayFound.length==1) {
                this.registry.provincia=arrayFound[0].s
                console.log(this.registry.provincia)
            }
            this.createSimplePdf()
        },
        "registry.residenteIn" () {
            let arrayFound=this.comuni.filter(v => v.n.toUpperCase()==this.registry.residenteIn.toUpperCase())
            if (arrayFound.length==1) {
                this.registry.residenteProvincia=arrayFound[0].s
            }
            this.createSimplePdf()
        },
        "registry.domiciliatoIn" () {
            let arrayFound=this.comuni.filter(v => v.n.toUpperCase()==this.registry.domiciliatoIn.toUpperCase())
            if (arrayFound.length==1) {
                this.registry.domiciliatoProvincia=arrayFound[0].s
            }
            this.createSimplePdf()
        },
        "registry.natoil" () {
            this.registry.natoilDDMMYYYY=this.dateObj(this.registry.natoil)
            this.createSimplePdf()
        },
        "registry.identificativoData" () {
            this.registry.identificativoDataDDMMYYYY=this.dateObj(this.registry.identificativoData)
            this.createSimplePdf()
        }
        
    },
    directives: {
        debounce
    },
    methods: {
        dateObj(dateString) {
            let arrayDate=dateString.split("-")
            return {
                "day":arrayDate[2],
                "month": arrayDate[1],
                "year" :arrayDate[0]
            }
        },
        getPdf() {
            axios
                .get('templatePdf/autodichiarazione.jpg',{
                    responseType: 'arraybuffer',
                })
                .then(response => {
                    console.log('getPdf')
                    this.imagePdf=response.data 
                    console.log(this.imagePdf)
                    this.createSimplePdf(true)
                    
                })
                .catch(e => {
                    this.error = e;
            })
        },
        getComuni() {
            axios
                .get('json/comuni.json',{
                })
                .then(response => {
                    this.comuni=response.data 
                    for (let index=0;index <this.comuni.length;index++) {
                        this.arrayComuni.push(this.comuni[index].n)
                    }

                    
                })
                .catch(e => {
                    this.error = e;
            })
        },
        getConfigJson() {
            axios
                .get('configTemplate/autodichiarazione.json',{
                    
                })
                .then(response => {
                    console.log('getPdf')
                    this.configPdf=response.data 
                    this.getPdf()
                })
                .catch(e => {
                    this.error = e;
            })
        },
        setProvincia(index) {
            console.log(this.comuni[index])
        },
        base64ToArrayBuffer(base64) {
            var binary_string = window.atob(base64)
            var len = binary_string.length
            var bytes = new Uint8Array(len)
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i)
            }
            return bytes.buffer;
        },
        toBuffer(ab) {
            var buf = Buffer.alloc(ab.byteLength);
            var view = new Uint8Array(ab);
            for (var i = 0; i < buf.length; ++i) {
                buf[i] = view[i];
            }
            return buf;
        },
 createSimplePdf(isTheFirst=false) {
            console.log("createSimplePdf")
            // create a document the same way as above
            const doc = new PDFDocument( 
                {autoFirstPage: true,
                size: 'A4',
                layout: 'portrait',
                bufferPages: true,
                }

            )         
            const stream = doc.pipe(blobStream())

            var d = new Date();
            var dd = String(d.getDate()).padStart(2, '0');
            var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = d.getFullYear();
            doc.font('Courier')
            doc.fontSize(10).text(d, 5, 5)
            if (this.imagePdf) {
                doc.image(this.imagePdf, 0, 0, {width: 600});
            }
            if (this.registry) {
                console.log('ci sono')
                localStorage.registry=JSON.stringify(this.registry);
                for (var k in this.configPdf) {
                    if (this.configPdf[k]) {
                        console.log(k)
                        console.log(this.configPdf[k])
                        if (this.configPdf[k].type=='text') {
                            doc.fontSize(8).text(this.registry[k], this.configPdf[k].x, this.configPdf[k].y,{align:this.configPdf[k].align})
                        } else if (this.configPdf[k].type=='radio' && this.registry[k] != '') {
                            doc.fontSize(8).text(this.configPdf[k].checkChar, this.configPdf[k][this.registry[k]].x, this.configPdf[k][this.registry[k]].y,{align:'left'})
                        }  else if (this.configPdf[k].type== 'date') {
                            console.log(this.configPdf[k]['day'])
                            doc.fontSize(8).text(this.registry[k].day, this.configPdf[k].day.x, this.configPdf[k].day.y,{align:this.configPdf[k].align})
                            doc.fontSize(8).text(this.registry[k].month, this.configPdf[k].month.x, this.configPdf[k].month.y,{align:this.configPdf[k].align})
                            doc.fontSize(8).text(this.registry[k].year, this.configPdf[k].year.x, this.configPdf[k].year.y,{align:this.configPdf[k].align})
                        }
                    }
                }
            }
            const pdfChunks = [];
            var pdfBuffer=null

            doc.on('data', (data) => {
                pdfChunks.push(data);
            });
            doc.on('end', () => {
                console.log('end')
                pdfBuffer=Buffer.concat(pdfChunks)
            })


            // Finalize PDF file
            doc.end();
            stream.on("finish", function() {
                this.$refs.iframe.src = stream.toBlobURL('application/pdf');
                setTimeout(function () {
                    console.log('start download')
                    this.bufferStreamPdf=pdfBuffer
                    //if (isTheFirst==false) this.downloadPdf()
                }.bind(this), 100)
                
            }.bind(this)); 
        },
        downloadPdf() {
                console.log(this.bufferStreamPdf)
                let blob = new Blob([this.bufferStreamPdf], {type: 'application/pdf'});
                var link=document.createElement('a');
                link.href=window.URL.createObjectURL(blob);
                link.download="autocertificazione.pdf";
                link.click(); 
                console.log('end end ')
        },
    },
    
}
</script>>