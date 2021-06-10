import { selectAgendas } from './agendasSlice';
import { useSelector } from 'react-redux';
import { Agenda } from './Agenda';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';

export function Agendas() {
    const agendas = useSelector(selectAgendas);
    const [activePage, setActivePage] = useState(0);

    const getPerPage = () => {
        // Get number of items per page depending on current window width
        const windowWidth = window.innerWidth;
        if(windowWidth > 960) {
            return 6;
        } else if (windowWidth > 600) {
            return 4;
        } else {
            return 2;
        }
    }

    const [perPage, setPerPage] = useState(getPerPage());
    const changeOffset = (currentPage, itemsPerPage) => currentPage * itemsPerPage;
    const [pageCount, setPageCount] = useState(0);

    let offset = 0;
    let currentAgendas = [];

    const [displayedAgendas, setDisplayedAgendas] = useState([]);
    const handlePageClick = ({selected: selectedPage}) => {

        setActivePage(selectedPage);
        offset = changeOffset(selectedPage, perPage);
        updateAgendas(offset);      
         
    };

    const handlePageResize = () => {

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