import { useMemo } from 'react'
import * as Fuzzysort from 'fuzzysort'
import fuzzysort from 'fuzzysort'

const SEARCH_THRESHOLD = -Infinity
const SEARCH_LIMIT = Infinity

export const useSearch = (searchValue: string, options: string[]): string[] => {
  return useMemo<string[]>(() => {
    // getting fuzzy search results
    const results = fuzzysort.go(searchValue, options, {
      threshold: SEARCH_THRESHOLD,
      limit: SEARCH_LIMIT,
      allowTypo: true
    })

    // highlighting them with <strong />
    return results.map(result =>
      fuzzysort.highlight(
        fuzzysort.single(searchValue, result.target) as Fuzzysort.Result,
        '<strong>',
        '</strong>'
      ) || ''
    )
  }, [searchValue, options])
}
