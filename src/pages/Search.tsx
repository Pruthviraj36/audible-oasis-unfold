import { useState, useEffect } from "react";
import { Search as SearchIcon, Filter, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AudiobookCard } from "@/components/AudiobookCard";
import { sampleAudiobooks, genres } from "@/data/audiobooks";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(sampleAudiobooks);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const trendingSearches = ["Atomic Habits", "Harry Potter", "Thriller", "Self Help", "Bestsellers"];
  const recentSearches = ["The Midnight Library", "Project Hail Mary", "Psychology"];

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(sampleAudiobooks);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const filtered = sampleAudiobooks.filter(book => {
        const matchesQuery = 
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.narrator.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.genre.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesFilters = selectedFilters.length === 0 || 
          selectedFilters.some(filter => book.genre === filter);
        
        return matchesQuery && matchesFilters;
      });
      setSearchResults(filtered);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedFilters]);

  const toggleFilter = (genre: string) => {
    setSelectedFilters(prev => 
      prev.includes(genre) 
        ? prev.filter(f => f !== genre)
        : [...prev, genre]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setSearchQuery("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center mb-6">Discover Your Next Audiobook</h1>
        
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search audiobooks, authors, narrators, genres..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 h-14 text-lg"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setSearchQuery("")}
            >
              Clear
            </Button>
          )}
        </div>
      </div>

      {!searchQuery.trim() ? (
        <div className="space-y-8">
          {/* Trending Searches */}
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              Trending Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((term) => (
                <Badge
                  key={term}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </Badge>
              ))}
            </div>
          </section>

          {/* Recent Searches */}
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
              Recent Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((term) => (
                <Badge
                  key={term}
                  variant="outline"
                  className="cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => setSearchQuery(term)}
                >
                  {term}
                </Badge>
              ))}
            </div>
          </section>

          {/* Featured Books */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Featured Audiobooks</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {sampleAudiobooks.slice(0, 10).map((book) => (
                <AudiobookCard key={book.id} book={book} />
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div>
          {/* Filters */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              {selectedFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant="default"
                  className="cursor-pointer"
                  onClick={() => toggleFilter(filter)}
                >
                  {filter} ×
                </Badge>
              ))}
              {(selectedFilters.length > 0 || searchQuery) && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear all
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Badge
                  key={genre}
                  variant={selectedFilters.includes(genre) ? "default" : "secondary"}
                  className="cursor-pointer transition-colors"
                  onClick={() => toggleFilter(genre)}
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-muted-foreground">
              {isSearching ? "Searching..." : `${searchResults.length} results found`}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {searchResults.length === 0 && !isSearching ? (
            <div className="text-center py-12">
              <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {searchResults.map((book) => (
                <AudiobookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};