type propsType = {
    datasource: any[];
    tables: {
        label: string;
        key: string;
    }[],

}
const GridCol = (props: propsType) => {
    const { datasource, tables } = props;
    return (
        <div>
            <table className='border border-black-2'>
                <thead>
                    {tables.map((x: any, i: any) => <th className="border border-black p-3 text-[15px]" key={i}> {x.label}</th>)}
                </thead>
                <tbody>
                    {
                        datasource.map((row:any,ind:any)=><tr className="border border-black p-3" key={ind}>
                            {tables.map((col,ind)=><td className="border border-black p-3" key={ind}>
                               {row[col.key]}
                            </td>)}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}
export default GridCol;