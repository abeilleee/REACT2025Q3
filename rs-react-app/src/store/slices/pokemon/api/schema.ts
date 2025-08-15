import z from 'zod';

const ResultsSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export const ApiResponseSchema = z.object({
  count: z.number(),
  next: z.nullable(z.string()).optional(),
  previous: z.nullable(z.string()).optional(),
  results: z.array(ResultsSchema),
});

const AbilitySchema = z.object({
  ability: ResultsSchema,
  is_hidden: z.boolean(),
  slot: z.number(),
});

const StatsSchema = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: ResultsSchema,
});

export const PokemonSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  height: z.number(),
  weight: z.number(),
  abilities: z.array(AbilitySchema),
  sprites: z.object({
    other: z
      .object({
        home: z.object({
          front_default: z.string(),
        }),
      })
      .optional(),
  }),
  stats: z.array(StatsSchema),
});
