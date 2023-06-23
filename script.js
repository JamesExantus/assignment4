// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
     const randomizeButton = document.getElementById("randomize"); 
     const submitButton = document.getElementById("submit");

// Array of predefined poster objects
const posters = [
    {
      image: 'https://www.usatoday.com/gcdn/-mm-/18e6d69e5da630ce37a497514798a97de656c210/c=0-60-2998-1754/local/-/media/USATODAY/USATODAY/2014/03/19//1395256555000-Rocky-2.jpg?width=1320&height=746&fit=crop&format=pjpg&auto=webp',
      title: 'rocky',
      quote: 'push forward',
    },
    {
      image: 'https://www.usatoday.com/gcdn/presto/2023/02/23/USAT/499c49d9-d4c1-420c-98cd-4205a378648c-USATSI_20062601.jpg?crop=3494,3494,x843,y0&width=240&height=240&format=pjpg&auto=webp',
      title: 'sports',
      quote: 'never quit',
    },
    {
      image: 'https://www.usatoday.com/gcdn/presto/2023/06/21/USAT/b91b7a7d-04ad-41e2-be59-294fac524e77-USP_NCAA_Baseball__College_World_Series-Florida_vs_1.jpg?crop=3301,3301,x742,y0&width=240&height=240&format=pjpg&auto=webp',
      title: 'success',
      quote: 'hard work pays off',
    },
    // Add more poster objects as needed
  ];
  
  // Event listener for randomize button
  // TODO: Add an event listener to the randomizeButton that calls a function when clicked
    randomizeButton.addEventListener("click", generateRandomPoster);
  // Event listener for submit button
  // TODO: Add an event listener to the submitButton that calls a function when clicked
    submitButton.addEventListener("click", generateCustomPoster);

  
  // Function to generate a random poster
  function generateRandomPoster() {
    // TODO: Generate a random index within the range of the posters array length
    const randomIndex = Math.floor(Math.random()* posters.length);

    
    // TODO: Retrieve the random poster object from the posters array
    const randomPoster = posters[randomIndex];
  
    // TODO: Call the function to update the DOM with the values from the random poster object
    updatePoster(randomPoster.image, randomPoster.title, randomPoster.quote);


  }
  
  // Function to generate a custom poster
  function generateCustomPoster(event) {
    event.preventDefault();
  
    // TODO: Retrieve the entered quote and author from the input fields
    const quoteInput = document.getElementById("quoteInput");
    const authorInput = document.getElementById("authorInput");
    const customQuote = quoteInput.value;
    const customAuthor = authorinput.value;
  
    // TODO: Create a custom poster object with the entered values
    const customPoster = { 
      image: "https://www.usatoday.com/gcdn/-mm-/18e6d69e5da630ce37a497514798a97de656c210/c=0-60-2998-1754/local/-/media/USATODAY/USATODAY/2014/03/19//1395256555000-Rocky-2.jpg?width=1320&height=746&fit=crop&format=pjpg&auto=webp",
      title: " rocky 2 ",
      quote: customQuote + " - " + customAuthor,
    };

    // TODO: Call the function to update the DOM with the values from the custom poster object
    updatePoster(customPoster.image, customPoster.title, customPoster.quote);
  }
  
  // Function to update the poster content in the DOM
  function updatePoster(imagepost, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    const posterImage = document.getElementById("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgUFBYYGBgaHB0YHRwcHBoeGBghHB4aHBwYGhwcIS4lHB8rHxwcJjgmKy8xNTU1GiQ7QDs0Py40NjEBDAwMEA8QHxISHzYsJCs0NDY2Nz00NDQ2OjY0NDQ0NDQ2NjQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAK0BJAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADgQAAIBAgQEBAQEBQQDAAAAAAECAAMRBBIhMQVBUWEGInGBE5Gh8DJCsdFSYnLB4RUjgvEHFCT/xAAaAQADAQEBAQAAAAAAAAAAAAAABAUDAgEG/8QAKhEAAgEEAgEEAgICAwAAAAAAAAECAwQRIRIxQQUTIlFhcTKhI7GBkdH/2gAMAwEAAhEDEQA/AMpERLBgIiIAIiIAInxjaeGI94rXu40Xh7Y7a2U66bWkdInEORPS1Bz0hTu6U9Zw/wAnlaxrU9tZX4OkREaExERABERABERABERABERABERABERABE8u9hczjmJ3+UXr3MaK3t/Q1a2k671pfZ2Lj19JzZjy0+s90qZawUEk6AAXJ7ADeWmO4DUoUfi1itMtbLTJ/wB1rmxOUfhAGuvppJNS9rT60vwWqfp9vSxy239/+HPhvDXrUalUFB8NlWxNi+bU7m1x276SGykEgixGhB3FuU8niT0MM4QlTUqZCb65ct2y2N+gJ7jqZLQGrRNb89MhKg5kNfJUPqQUP9K9Y7aXDeIzffTJV3QSlKUVpMixESiICIiACIiACIiACIiACInwzmclGLk+kdQg5yUV2zza5tOuHqKFqKwYswUKRawIYE5u1hyjDr5hr3nCstibai525eo5T5upUdSbl9n1lOnGlTjH6AS+3+Z8ItPgaeg/XWZ7N8pnbBYZ6jqiDMzGwFwB7k6D1PWfCJFOJcXVNmtmPLQ3GvrJCDQX1lj0+cmmn0fPepxhyTit/wCz1ERKRLEREAETxUqKouxAkf8A1Gnya/oD+04c4rtgk2S4nD/2k0GYXM7gz1Si+mGGIiJ0AiIgAiIgBzq20v1+9p4D6+bnr6z7XO3vPGJrjKoA1AN9uu+0iX+62PwfQ+mPjRy/tlzhOOGiCKCIjEWzkBqgvvZjt7SrxWJZmLOzMx3ZiST7mdOC8HxGJutJVLAZspYKSNrrmIBH7yYvhaomIpU8cfgU3vd7oTsRYEFlHmygltgb2iii/L0MTuacW8Lf9lPhMPWxBGHoU2fziqSDoAqldQbD829+dpsPBa0WGJpYgsoCAfiIVQzFSCvNg7Ai97XNrXN9twDwzh8GpdB8R7Wzm17HkvJBr79ZgPHOFNDEu6ny1UvfQAEEBxb5N/ym+HHDXgmxqqo5RfnZW8Qwho1HpMQSjWuNmG4YdiCD7yNJvFaLoaedSpalTYA7hQuRb9DlQX7gyFLtOXKCf4JM1iTQiInR4IiIAIiIAIiIAJP4VwipiC4pLmKJnPfkFHc629JAn6L/AOO66JRcKCXzgta2ZhluAvXZ7DsYpd1Ixg4PtjFCM0/citJoqPBnCFzPia63SnoFK389xbTqLbdWG013G+E06lBzifhlwpZWVQmQgaCm34rX6nW/IaC7rURa6+XXNa1gSebDe/2bz8d8V08bVd2qEZByVx8NRcDY2Zjtq1zf5CTCGsIbqV5VanJvBKwPgOrWw/x6dRVLElVfQFR+YsL78h05zKmi6MRUy2GnlNwe4I3H7zUYjxTXOGOHQKBkWmCLiw0D9dxce/aZnI5GuUe5P9tJo7Wr0kbUbuOW5Sx9I+pirMGWwsRbS40tyO/pJeIql3ZyACzFiBsMxJsO2siphQLX5bDl6nrO8fs7eVJNy8il7cqs0l4EREeEROdaoEUsdgLzpKXjWLv/ALa/8v7CZ1JqMcglllficUznMx9ByA6TkrkbTzOiUWOyk+klylnbN0vo+OxOsn8N4iVsr3Kk7k/h/wAT2eC1Mt20PSV9bDshswnkKvGWU9ncqUkstGrVr6ifZneHYxkbzG6nQ9u4milSlVU458i0o4ERE1PBERADxUTMLfI9JArI4Iutx1GoPy2llEwrW8au32b0bmdJYXR64Rxd8NUSsp1U6L/EDoy+4+WnSa3xv4mw2Jw65CS6nOp6C1mRvb6qJjyL7xlG1oqrDCayMTvnKSklhoufCfE8S1dCvxKiJayFjkVdsxzaL2IsdOe02nGOFI3/ANWIU5qeZ0UalQBmyKO1sxY6CwtzMxnB+MVqKZMP8JG7qqu1/wA2ZtGI6E9NDNn4P4jVrLUo4hWZ0IfzixdGuCpB3/NbS2o6RGUeEnB9ms8zXurCX9mE4vxAVslxZ1BJ6ZWbyqL9Le5YnnK6WnGuEvSqPTVGYKxAKhjm6ajewtpyN5FxWEdFR2RkzA6NzI0JHMA9DqNY/ZV8r232jO9t4xxUh0yLERKBPEREAEREAEREAL3hHA0xNK1Oqq4hWJKOcqsmlipsdRrr3sbaGavwvwL/ANRi9WopqWtkRgwI5FgVuCDqGuAJjeCcOzsGIuOQ695t8YFoYZgpANw1wABpbQSBeTj7z47x/spUvc9pQzhM9+L+OLTcUi1SmQA90AOYagDVxcaHQ6bTIeJONNVRKIDBdHZmCqz3UFfKugABPv6S14m+ExuSo7FWZcrJcBwwNwyE77nsRYb6jGVqKozIrZlUkBv4rHcdoxZRcqnLwjOvwjTUV2eIiJXERERABERADhjKmVGboP8AEy7D3mpxaZkYdQZmPSI3eco0pmg4d4bZwLm19/SfoHh/g9GkNUuw0Dcj6XBtMxharFVCOEAUEuRff7veXfA+L1Edg1ZKyLv5VBUixBBG+4v6yNNyfbK0YxSSSJHHcEFI8hVbE6jSYbi9AEG3SabjNVsS5aoHqKgNkVsqnmSQCCxsNFGpvsZk8SmZWZabJlFyCCAQb8uUKccbR1OeU4tGfGk1lCoGUEEHQX+X0mTZpccJra2FyTvf+W/7rKtvPjLH2SZLKLiIiUjEREQAREQAREQA+rTLEKASToAAST2AG8/QuD4Y4Shau5+LWFkp5jamqg5msDbNY78iVHUzB4HFvRdalM2dTcH6ajmJb4Co7uatR2d3/EzG5NibKOSqLnQWGveSPUIcH7n3opWs3OHteFs0+J41XprZH0tpdVNrcrkXPvMRxLilatpVfMAb2soF9dbKB1mxqU85RBoGFx20F5nOIcMAZ11DgFlH8WTVl9ctyP6bc4vYV+NTEun/AEdXFFShmOmijiIl8liIiACIiACe6FIuwUbk2niWnBEGYseUwuKvtU3I0ow5zSNtwPCAIXy3/IAOVwbnX0+sgeIMQRanzWx7Xlng8UqUMx/E12GguNSosemkzmNuSXbc6z5ybWvsrU4tyb8EHE0rJWBAvkFvZ6bAjtYfWUUt+JVQbi9/Io32sFJHsdLSolr05/4n+xC8XzX6EREoCgiIgAiIgB8ImUr0yjFSLETWSs43SBVXPJgCex3i9xDlHP0dQey38KIHpKGJ0vr0ysbfoJpqqUqNIAWC3zMbBVFz2AGu5lRh+Hph3y03zofMp6X1I++ssq+I8hB22v09O8gzfyZZpr4LPaIVbiCLXIQ3GikFbXDaC++t+9+c7Pl00slwTttfXT0nLEV1urFX0Jsco311sfUi8s14SWw71lOqHzqdLKwBVlPQg6jtOGnn4mqkor5eTI+O/DCYZkrYYl6FUXHMod7actfUTP8ABm/3AL9T9P2/Sfq3i3H06WAwf8PxCjb7BKgYG381jp2tPz2lhkNU1EQIgACLrfYAkk6nnvrrKdvmU1r8kmrFJN5J0RErCoiIgAiIgAiIgAl/wogonX9iRKCWOAqZVXs1/wCxkz1TdNfsesP5v9H6FgKI+EW6qwHXXl8x+koeOuwyPs62ObndNj35TR8MrB6Yy/lFzryEzvH6gY37bdO0jvSTQ7DLk0zKcQohWV1FkqKKiAbKGJDIP6XDL6ASJLSqc+FXrRqsnfLVBcE9s6vKufSW8+dNNkirHjNxERE3MxERABLjhlOyZvv0lPL3DrZR6SZ6nPEFH7Y7YwzJs1fGcVhmo0vhMMwsMv5gtjfNroc1vryma4xxNWYC9rC3ynKpXVfxbeu058KdA5dlDKbqSw2Btcr3te3rJDfKWWUVDgtbKsYgNmINxY/pacZe46lTL1Gpp5HZiBaxUM17qOX3pIP+lPvaw7ypZ3FKnFxk8bErqjUnJSS8ECJLfh7jpI9Sky/iBEowr05/xkmJSpTj2jxERNTMREQATxVphlKsLg8p7iAFfw7GOtb4bsSqAhQeQupB76W1mspVkZLMBe9wdLiZ5MOPiLU5jynowIIsfnO+JpumqG45A8u15Du6XCePsqWspShnvDL98OEQPZiDzI0529QbH5Gc8PxsUlrDNZXTLbrba3pMrieIYnVSj/Uj6SqPxGNiGueUwVPecncqra44NpV4kanC8WrWsvw8nbNVQMddr6bSj4bVZ6altwMvqBoD8pecLwYHDMSr65npDvo6tYdtJWAW0GkqWUXjlnXQhcP5YZ9iIj4uIiIAIiAIAIk7C8OLfi07c5ZUeDA8rxGpf0oPC3+hqFpUksvX7M/LLDUf9vW40uJaPwJBrYjn29pIw3BnIzKtwNQT05j/AKk67u410oxXQ7bW7pNykz3wXEuvk1NxciQ+NYjz66dpLxSUw7gZwb2UpbKCL3BvuL9OUosfTLa7nbfQW5RP8DWN5RTfGtVcfxpb3VlYfofnO05o6CqM34QGUnoWUhT7MQfnOkvWEv8AHj6ZHu1ieRERHRYREQAXtrLTheMVwRKucXpG+ZGKN1Gx9REru1dZZXaGrev7Tw+jWLgS58il+e1/e00i+HWNGmSmZgczAHUglrqOQsAvzO8w3CePVKRF3ZG2BGxHrN1gPGVQ2zKrj0yn9vpI7pKDcZ6ZQlUlNJ08YPrcGRmAoq6v/C65baEnU+31kl+EU6ahq725HKL26g/9cpOTiq4myAOmoObYgjXRh+ukVODB1QWyrYszXJbXYC+57z32o9rZg6s1qTwVNbglJhenWVjyDHKSegvKPH8DqLe6tbUE2uum+uxkzE8PdFNVQQlzZjpfWwuN5Dp8VcDLmYKdx+U89trTPSfWGMJNrTyjNYnAMp20P09+k+Dhz75dOtxaaU1Ucar622+R9pASiEfMgupPmUGx9V6HnGo39ZLGjF2tNvOyobAOOn1/acKlFl3E11PCBtSSt9QWXTtqN/lIGIo7g/PWdRv6qe8MHZ031kzoMSTiaA3XQ/rIyKSQLan6yjRvIVFvTE6trOD1tC8sMmZbe84rhsurb9P3krDkaAxC+rRqNcfA9ZUpQzy8kZ8O+W4By3sT/YfMQuFsC00vEkCWpg3APtmsPa/3ylZjqORAesSaa0PU8NZJuFpF+HV1Rbsro5tqcq3J07AE+xmVm1/8e45KdRxUYKCosxOgO1jIfizhNJa7ikMhvcqfwNfW6EaruNNulhKlpXjCCjLRIuqMpVW4rJlonRqDDce/L5ydgOGl/MRp3jFa8p01nOWZUrWc39IgJTZth+06phTz+kvauFVRYSsxFUL67SZK/qzfx0Pxs6cV8tnBsMoGpP0lnwjgbuwJBPQDUzT8A8MLkFTEHLscugtfkT1nvjnFhTPw6D2QW0UAWtyDDVhznM69ZxxJ6ZwoUuWILf8ARxbBJTU5mAIGijU35A9JzfHotginTmd5G4bwmtiCSPKoFyzXA9up0k9eHU6dmuXsfNyHtaKcXj6GU4p4byz7hqDPqxCqL2v+gn3EYt1TKl1G9+fqOm0+18ZYsUUC4IF/y3BHzlFjXcLmZ+XP+wnjwuuzqKbfy6JdbEqiFCwVdGIsCSR33HqJkeJ8cQHJSUsToBofrIXEsa9VjTQ/1NyH+e0+YbDKgsN+ZO5++kftbJ1PlLoVr3Sg3GHZHw+EcnPUbnmyja/K5/tJ8RLUKcaaxElSm5PLERE7PBERABERAD4yg6GSMNxF6e5uvXmPXr6zhExrUIVVho1p1ZU3lG24T4kAAOhGn07zT1OP0aia5lYW1XcajY+k/HGQjzIbHpyP7SXhuLspytcHvJVW3qUutodhOnVe9M3WP4h8QlczBOSkk/ORviocgyqQPxfzc/T6TOjE59bz0T0ZhEGnnY4kktFkcRh8xs+oNrbX725eneTcJiKCW+KgIIPmu2YG9tSDbtbbQ7zLPQVmytZr8yACDyses+VUq0fIHzL+IA3IIvbS+v5e82jFdmUn4Zv8RhMyF6TBgq5rA6kcx995HTCB0zpr1HMch9iZXAcSdbXGVdB2t3l/wzGWZ8hIDC4Hre9vvnOZJI9jyS0yl4ngr8vvrKlMKQb32Nx2myYBiRaV+KwPSZxmMJLyVGVidx8hDo3USScMwnlqR5iGTVI9Ji2+Irv5rZRY6CyrlG3YbzljarOiU11y5iT62HyAH1M8hLG9p5IPzhlnUYRweMNmp30BuCCDqDeSKeKfI6WUq1jdgSVK7FDfTTSccpkvD0YObQOET7Qwt7Zjfn2lxh6V7ATjh6PaWVwgmTbZxLC6IWPXIDeUnh6iuIxgYkCnRBdmNrZtQosd9bn/AIiQ/E/GrXQHsZWcJx9QUylFWZmJJtotzzY+gjVKGFkSq1Mvjk/Vcd4kVFZUctyu2UBe403kThFOkzCo5UWF7t5gxJ3C9hffc2n51XwrJlas5JLAlR+AegB195o6VXbzG1oTzlM8hFNNLRvW4lhr5mZ3I208um1hsPlKXiPFEIYKtl+R3JuemhtbtKB8ZYa/WZ7i/GvyJqTyH7Tlc56SO+EIfJsuOIccCcxpM3Wx1TEEkEqn8XNv6f3kenhGY56uv8vL/l19JPEp29gl8p/9Cde8cvjHSPFKkEGVRYfep6me4iU0sLCEBERPQEREAEREAEREAEREAE8ugbQi89RPGsgcFoFfwOR2OonxzWP51+okiJjK2pSeWjWNaaWEyLlqW5ddGN/0mh4QPjABx5r5OWl7ajr/AJlRLHg9QByDz29RFri2jGDlHwa0q0pSxI0j8NNEK6KHVjY3A13uhHSw9Z2/061NqiJZl8y2uQUYXtr96dpNwGKspRhdW5W66y0weJSkmU976XFtfL9/9SvixvlJFDw2ojMpbQTpxKyvoLCVYcB3Vdsxt/ad3qX3i0tJodjHLTPhHaDSB5RYzqy+Wco2eiA9NS+W3KeMRQA2E94JS1UgC5sfbvJFdGvYz1to8jLZWfDkmko94dTObPaD2almhyDMeYlHxni9lJvPuLxJtqdJk+IO1WotNNybfftNaUMvYrXlxWfJHwuFfF1suw3PYdB3mqwOB+GCl/J6dbXB56bzX+G/DqUMNmZNd78zpYa+t5Q8UqrTzbEnb1M3lLOEhKCWW32ZPjTst6aeYklQBraxt7SQMVVKgeVdOtz+0506GVmYm7E69uwnWVKNpFxTn2JzuJKT4s4ujt+N2PYWH7z7SoKn4RbvzPudZ1iNxpQj/FYMJVJS7YiImhyIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAJ6R7EEcp5ieNJrDBPDybLg+PzAGaFqy2zMLqovbrvpp1NvnPz3g9chst+811euQgUfmYX9F2+s+auIOlUaZXpNTimiqqOS5J3YZugvrsOki8MdyxD3572+ntJbC92O4nSmdAYvJ6HYFrwbBCs4S9jYm/pOfE6RplkO4vyIvbYi/IyX4ZsKyk6AA6+ukjeL3Jque4A9LT1RXDPnJlyk63Hxgr+AACqbkC6tv7aCW7YdqhOVbgC+g1+c++DuG03zO3mNgovtdr3PrpLTw85Sq9JhoQb36r9maKOcZ6ZxOphtrtYMliqWU63v30lViHl/wATqBqjsNr6emwlDi7FpkkuWByMm4plLicYSWU7ATh4Wo58Yl+dwPXlJfEArg5feQ+EVvgVqbKdVYG/6xqGOLE6yk5LJ+x8dxKpSSmrDyjX26z8n4rii9a24Gp9tv7TQ+LOOBwWB0YadZjcApN3IsWOnpym1pT92pnwLVpe1DHlkuIiXiYIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAfVaxuN5aUOItob5v5f2lVHxCASN1sR78pP9QpqUVL6HLOeG19l/h+Kpezadeo9RJPxADmXVT05SnGIzIt1FwRrz15S1wjeW0hSjgsQ2W/Cceqtd1zLbVfvv8ApHFKgqBmVQo6DftmJ3Mg01k/iDGlT+Guz2YnnpYgek5TbWDyUUpKS7OPA8YaQdAbMxTJoDYgm++2hkvCYvNiFaqQNbsbWBsOg62tJvgikrNUzKpYZSGIBIuToJz8WYFVqhl0zAk2mjjLinkz5RdRwxt+SkrOCzWuBc2HSUXFnK6A7yXi3I2lbiWzJc7mcQW8jUl8cI4IgCanvfrKvFut7qTcG8+VkLMFLGxsPSe62CWmptcmx1JjcUs7Eqks/wDBxrOazqhvlFielhy/tLOQeFDyZucnSzaQUYZ+yTWm5SeRERGjEREQAREQAREQAREQAREQA//Z");
    const posterTitle = document.getElementById("rockyy");
    const posterQuote = document.getElementById("never give up");

    posterImage.src = imagepost;
    postertitle.textContent = title;
    posterquote.textContent = quote;

  }