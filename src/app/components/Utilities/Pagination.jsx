const Pagination = ({page, lastPage, setPages}) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0

        })
    }
    const handlePage = (e) => {
        setPages((prevPage)=> {
            const {name} = e.target
            if(name === "prev"){
                return prevPage - 1
            }if(name === "next") {
                return prevPage + 1
            }
            
        })
        scrollTop()
    }
    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            {page>1 ? <button name="prev" onClick={handlePage} className="transition-all hover:text-color-accent">Prev</button> : null}
            
            <p>{page} of {lastPage}</p>
            {page === lastPage ? null : <button name="next" onClick={handlePage} className="transition-all hover:text-color-accent">Next</button>}
            
        </div>
    )
}

export default Pagination;