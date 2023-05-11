import { Chart as ChartJS ,BarElement ,CategoryScale,LinearScale,Tooltip,Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import Record from '../data.json'

const Country=()=>{
    

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
    )

    const options = {
      };
      
    const filteredData=Record.filter((item)=> item.age>30)
      
    const check = Record.map((item)=>item)

      const maindata=check.filter((item)=>{
        const dob = new Date(item.dob)
        const age = (new Date()).getFullYear() - dob.getFullYear();
        
        
        return age > 30;
    })
    console.log(maindata)
    const first = maindata;
    const gen = first.map((item)=>item.country)

    const no={};
    gen.forEach((country)=>{
        if (no[country]) {
            no[country]++;
        } else {
            no[country] = 1;
        }
    })
    console.log(no)

   const data ={
        labels:['India','USA',],
        datasets: [
          {
            label:'Number of People',
            data: no,
            backgroundColor:'red',
            borderColor: 'rgba(99, 162, 235, 1)',
            borderWidth:1,
          },
        ],
        
      };
    return(
        <div className="chart">
            <h1>Countries and Number of People from each country.
             </h1>
            <div  >
                <Bar
               
                data={data}
                options={options}
                >
                    
                </Bar>
            </div>
        </div>
    );
}

export default Country