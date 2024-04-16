import { z } from "zod";
import { createReviewDtoBody } from "../validators/create-review.validator";
export declare const createReview: (body: z.infer<typeof createReviewDtoBody>, loggedInUser_id: number, restaurantid: number) => Promise<any>;
export declare const update: (id: number, body: any) => Promise<{
    id: number;
    rating: string;
    comment: string;
    date: Date;
    userid: number;
    restaurantid: number;
}>;
export declare const remove: (id: Number) => Promise<{
    id: number;
    rating: string;
    comment: string;
    date: Date;
    userid: number;
    restaurantid: number;
}>;
//# sourceMappingURL=review.service.d.ts.map