const initState = {
  projects: [
    { id: 1, title: "Title 1", content: "blah blah blah" },
    { id: 2, title: "Title 2", content: "blah blah blah" },
    { id: 3, title: "Title 3", content: "blah blah blah" },
    { id: 4, title: "Title 4", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created project", action.project);
  }
  return state;
};

export default projectReducer;
