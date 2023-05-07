export default function Audio( props ){
    return(
        <>
            <audio controls>
                 <source src={props.url} type={props.type}>
                 </source>
            </audio>
        </>
    );
}