import { mutation } from "./_generated/server";
import { v } from "convex/values";  // Import Convex value types
import { query } from "./_generated/server";

export const addStartUp = mutation({
  args: {
    img:v.string(),
        name:v.string(),
        tag:v.string(),
        details:v.string(),
        amount:v.number()
  },
  handler: async ({ db }, { img, name, tag,details,amount }) => {
    return await db.insert("mentorCard", { img, name, tag,details,amount });
  }
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("mentorCard").collect();
  },
}); 

export const getTask = query({
  args: {
    id: v.id("mentorCard"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
    // ...
  },
});