import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        email: v.string(),
        imageUrl: v.string(),
        clerkId: v.string(),
        name: v.string(),
    }),
    StartUpCard: defineTable({
        img: v.string(),
        name: v.string(),
        minInvestment: v.number(),
        expectedYield: v.number(),
        rating: v.number()
    }),
    mentorCard:defineTable({
        img:v.string(),
        name:v.string(),
        tag:v.string(),
        details:v.string(),
        amount:v.number()
    }),
      tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
  review:defineTable({
    userid:v.string(),
    star:v.number(),
    usercomment:v.string(),
    reply:v.optional(v.string())
  })
});
