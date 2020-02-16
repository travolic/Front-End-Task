/**
 * Hotel model
 */
export interface Hotel {
    /** Name */
    name: string;
    /** Price */
    price: number;
    /** City */
    city: string;
    /** availability */
    availability: Availability[]
}

/**
 * Availability date range 
 */
export interface Availability {
    /** from date */
    from: string;
    /** to date */
    to: string;
}