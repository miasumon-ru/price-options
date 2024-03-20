import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



const LineChart = () => {

    const studentMarks = [
        { "student_id": 1, "math_mark": 85, "physics_mark": 78, "chemistry_mark": 82 },
        { "student_id": 2, "math_mark": 78, "physics_mark": 85, "chemistry_mark": 75 },
        { "student_id": 3, "math_mark": 92, "physics_mark": 88, "chemistry_mark": 90 },
        { "student_id": 4, "math_mark": 70, "physics_mark": 65, "chemistry_mark": 68 },
        { "student_id": 5, "math_mark": 88, "physics_mark": 90, "chemistry_mark": 85 },
        { "student_id": 6, "math_mark": 75, "physics_mark": 72, "chemistry_mark": 78 },
        { "student_id": 7, "math_mark": 80, "physics_mark": 82, "chemistry_mark": 79 },
        { "student_id": 8, "math_mark": 91, "physics_mark": 89, "chemistry_mark": 93 },
        { "student_id": 9, "math_mark": 83, "physics_mark": 80, "chemistry_mark": 85 },
        { "student_id": 10, "math_mark": 79, "physics_mark": 75, "chemistry_mark": 72 }
    ];


    return (

        <div>
           

                <LChart width={500} height={300} data={studentMarks}>

                    <Line dataKey={"math_mark"} stroke="green" />
                    <Line dataKey={"physics_mark"} />
                    <Line dataKey={"chemistry_mark"} stroke="red" />


                    <XAxis dataKey="student_id" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />

                </LChart>


        </div>
    );
};

export default LineChart;