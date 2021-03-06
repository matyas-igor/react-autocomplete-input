import { useMemo } from 'react'
import * as Fuzzysort from 'fuzzysort'
import fuzzysort from 'fuzzysort'

const SEARCH_THRESHOLD = -Infinity
const SEARCH_LIMIT = Infinity

export const useSearch = (searchValue: string, options: string[]): { value: string; html: string }[] => {
  return useMemo<{ value: string; html: string }[]>(() => {
    // getting fuzzy search results
    const results = fuzzysort.go(searchValue, options, {
      threshold: SEARCH_THRESHOLD,
      limit: SEARCH_LIMIT,
      allowTypo: true,
    })

    // highlighting them with <strong />
    return results.map((result) => ({
      value: result.target || '',
      html:
        fuzzysort.highlight(
          fuzzysort.single(searchValue, result.target) as Fuzzysort.Result,
          '<strong>',
          '</strong>'
        ) || '',
    }))
  }, [searchValue, options])
}
