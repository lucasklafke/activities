import express from 'express';
import cors from "cors"
const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" },
];
const app = express();
app.listen(4000)
app.use(cors());
app.get("/holidays",(req,res) =>{
    res.send([...holidays])
})
app.get("/is-today-holiday",(req,res) =>{
    const d = new Date();
    const today = `${('0' + (parseInt(d.getMonth()) + 1)).slice(-2)}/${('0' + d.getDate()).slice(-2)}/${d.getFullYear()}`
    let result = null
    holidays.forEach(holiday => {
        if(holiday.date === today){
            result = holiday
        }
    })
    res.send(result === null ?"Não, hoje não é feriado" : `Sim, hoje é ${result.name}`)
})