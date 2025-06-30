import { mutation } from "./_generated/server";
import { v } from "convex/values";  // Import Convex value types
import { query } from "./_generated/server";
// Define mutation with input validation
export const addStartUp = mutation({
  args: {
    img: v.string(),
    name: v.string(),
    minInvestment: v.number(),
    expectedYield: v.number(),
    rating: v.number(),
  },
  handler: async ({ db }, { img, name, minInvestment,expectedYield, rating }) => {
    return await db.insert("StartUpCard", { img, name, minInvestment, expectedYield, rating });
  }
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("StartUpCard").collect();
  },
}); 

export const getTask = query({
  args: {
    id: v.id("StartUpCard"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
    // ...
  },
});