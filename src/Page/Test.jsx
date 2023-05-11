import { Chart as ChartJS ,BarElement ,CategoryScale,LinearScale,Tooltip,Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import Record from '../data.json'

const Chart=()=>{
    const today = new Date()

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
    )

    const options = {
        // plugins: {
        //     tooltip: {
        //       callbacks: {
        //         label: function (context) {
        //           const userIndex = context.dataIndex;
        //           const userAge = new Date().getFullYear() - Record[userIndex].dob.getFullYear();
        //           return `Age: ${userAge}`;
        //         }
        //       }
        //     }
        //   }
      
        // maintainAspectRatio: true
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true,
                
        //       },
        //     },
        //   ],
        // },
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
    const gen = first.map((item)=>item.gender)
    

   maindata.forEach((item) =>{ console.log(item.gender)});
   console.log(gen)
    //   const arr=/
    //   console.log(arr)
   const data ={
        labels:maindata.map((user)=>user.first_name),
        datasets: [
          {
            label:'Age',
            // data: filteredData,
            // data: check.map((user) => user.gender === 'Male' ? 1 : 0),
            data: maindata.map((item) => new Date().getFullYear() - new Date(item.dob).getFullYear()),
        //     data:[ datas.filter((user) => user.age > 30 && user.gender === "male").length,
        //   datas.filter((user) => user.age > 30 && user.gender === "female")
        //     .length,],
            backgroundColor:'red',
            borderColor: 'rgba(99, 162, 235, 1)',
            borderWidth:1,
          },
          {
            label:'Gender',
            // data: maindata.map((user) => user.gender),
            data :gen,
            backgroundColor:'green',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth:1,
          },
        ],
        
      };
    return(
        <div className="chart">
            <h1>User data Greatern than the 30 </h1>
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

export default Chart