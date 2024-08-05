export const Nav = ({page, setPage})=>{


    return (
        <nav>
            <ul>
                <li className={page===1?'active':''} onClick={()=>setPage(1)}>Blog list</li>
                <li className={page===2?'active':''} onClick={()=>setPage(2)}>Create blog</li>
            </ul>
        </nav>
    )
}