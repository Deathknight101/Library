import { useEffect, useState } from "react";
import { getStoredBooks } from "../../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const PagesRead = () => {
    const books = useLoaderData();
    const [readlist, setReadlist] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        const storedId = getStoredBooks();
        if (books.books.length > 0) {
            const listread = books.books.filter(book => storedId.includes(book.bookId))
            setReadlist(listread);
        }



    }, [])

    useEffect(() => {
        const newdata = readlist.map(list => ({
            name: list.bookName, pages: list.totalPages
        }))

        setData(newdata)
    }, [readlist])
    console.log(data);

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesRead;