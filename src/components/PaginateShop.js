import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function PaginateShop({ pages, page, keyword = '', isAdmin = false }) {
    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[1].split('&')[0]
    }

    return (pages > 1 && (
        <Pagination>
            {[...Array(pages).keys()].map((x) => (
                <LinkContainer
                    key={x + 1}
                    to={!isAdmin ?
                        `/shops/?keyword=${keyword}&page=${x + 1}`
                        : `/admin/shoplist/?keyword=${keyword}&page=${x + 1}`
                    }
                >
                    <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                </LinkContainer>
            ))}
        </Pagination>
    )
    )
}

export default PaginateShop
