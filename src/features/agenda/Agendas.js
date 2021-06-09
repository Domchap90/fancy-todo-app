import { selectAgendas, selectcurrentAgendas, changePage } from './agendasSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Agenda } from './Agenda';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

export function Agendas() {
    console.log('componenet entered!')
    const agendas = useSelector(selectAgendas);
    
    const [activePage, setActivePage] = useState(0);
    console.log('active page = ', activePage)

    const getPerPage = () => {
        const windowWidth = window.innerWidth;
        if(windowWidth > 960) {
            return 9;
        } else if (windowWidth > 600) {
            return 6;
        } else {
            return 3;
        }
    }
    const [perPage, setPerPage] = useState(getPerPage());

    const changeOffset = (currentPage, itemsPerPage) => currentPage * itemsPerPage;
    let offset = 0;
    const [pageCount, setPageCount] = useState(0);
    let currentAgendas = [];
    // console.log('currentAgendas', currentAgendas)
    const [displayedAgendas, setDisplayedAgendas] = useState([]);

    const handlePageClick = ({selected: selectedPage}) => {

        setActivePage(selectedPage);
        console.log('handlePageClick entered with page ', activePage)
        offset = changeOffset(selectedPage, perPage);
        updateAgendas(offset);      
         
    };

    const handlePageResize = () => {
        console.log('handleResize entered!!!!')
        const itemsPerPage = getPerPage();
        
        setPerPage(itemsPerPage);
    };

    const updateAgendas = (startIndex) => {
        console.log(`updateAgendas entered with start index ${startIndex} & active page ${activePage}`)
        currentAgendas = agendas.slice(startIndex, startIndex + perPage);
        setDisplayedAgendas(currentAgendas.map((a) => {
            console.log(`id  = ${a.id}, agenda = ${a.agenda}`)
            return <Agenda id={a.id} agenda={a.agenda} completed={a.completed} key={a.id} />;
        }));
        
    }

    useEffect(() => {
        console.log('useEffect for mount entered.')
        window.addEventListener('resize', handlePageResize);

        return () => window.removeEventListener('resize', handlePageResize);

    }, []);

    useEffect(() => {

        console.log('useEffect for updates entered.')
        setPageCount(Math.ceil(agendas.length/perPage));
        offset = changeOffset(activePage, perPage);
        updateAgendas(offset);  
        
        // window.addEventListener('resize', handlePageResize);

        // return () => window.removeEventListener('resize', handlePageResize);

    }, [agendas, perPage]);

    return (
        <div>
            <div id="agendaContainer" > 
                {displayedAgendas}
                
            </div>
            <div className="paginationContainer" >
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={10}
                    marginPagesDisplayed={0}
                    breakLabel={"..."}
                    containerClassName={'pagination'}
                    previousLabel={'<'}
                    nextLabel={'>'}
                />
            </div>
        </div>
    );
          
}