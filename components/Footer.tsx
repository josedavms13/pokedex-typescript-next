import React from 'react';
import Pagination from 'react-responsive-pagination'


function Footer({currentPage, totalPages, onPageChange}):React {
    return (
        <div>
            <div className="voice-controls">
                controls
            </div>
            <div className="pagination">
                <Pagination current={currentPage} total={totalPages} maxWidth={60} onPageChange={(e)=>onPageChange(e)}/>
            </div>
        </div>
    );
}

export default Footer;