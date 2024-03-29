'use client'

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import Link from "next/link"
import { redirect, usePathname, useSearchParams } from "next/navigation"
import { generatePaginationNumbers } from "@/styles/utils"
import styles from './Pagination.module.css'

interface Props {
    totalPages: number,
}

export const Pagination = ({ totalPages }: Props) => {

    const pathname = usePathname()
    const searchParams = useSearchParams()

    const pageString = searchParams.get('page') ?? 1;
    const currentPage = isNaN(+pageString) ? 1 : +pageString;

    if (currentPage < 1 || isNaN(+pageString)) {
        redirect(pathname)
    };


    const allPages = generatePaginationNumbers(currentPage, totalPages);


    const createPageUrl = (pageNumber: number | string) => {

        const params = new URLSearchParams(searchParams)

        if (pageNumber === '...') {
            return `${pathname}?${params.toString()}`;
        }

        if (+pageNumber <= 0) {
            return `${pathname}`;
        }

        if (+pageNumber > totalPages) {
            return `${pathname}?${params.toString()}`;
        }

        params.set('page', pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    }

    return (
        <div className={styles.container}>
            <nav aria-label="Page navigation example">
                <ul className={styles.container__unorderlist}>
                    <li className="page-item">
                        <Link
                            className={`${styles.container__link} page-link`}
                            href={createPageUrl(currentPage - 1)}
                        >
                            <IoChevronBackOutline size={30} />
                        </Link>
                    </li>

                    {
                        allPages.map((page, index) => (
                            <li key={page} className="page-item">
                                <Link
                                    className={page === currentPage ? styles.container__link_active : styles.container__link_inactive}
                                    href={createPageUrl(page)}
                                >
                                    {page}
                                </Link>
                            </li>
                        ))
                    }

                    <li className="page-item">
                        <Link
                            className={`${styles.container__link} page-link`}
                            href={createPageUrl(currentPage + 1)}
                        >
                            <IoChevronForwardOutline size={30} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
