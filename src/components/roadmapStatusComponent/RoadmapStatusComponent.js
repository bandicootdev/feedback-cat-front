export const RoadmapStatusComponent = ({status}) => {
    return (
        <>
            <h3>Roadmap</h3>
            <ul>
                {status.map((item) => <li key={item.id}><h5>{item.name}</h5> <p>{item.count}</p></li>)}
            </ul>
        </>
    )
}