interface getPageCountProps {
    totalCount:number;
    limit: number;
}
export const getPageCount = ({totalCount, limit}: getPageCountProps) => {
    return Math.ceil(totalCount/limit)
}

interface getPagesArrrayProps {
    totalPages:number;
}
export const getPagesArrray = ({totalPages}: getPagesArrrayProps) => {
    let result = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }
    return result;
}