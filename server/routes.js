module.exports = function (app) {
  const sessions = app.locals.sessions;

  function handleSessionCommands(session_id, newCommand) {
    if (sessions[session_id]) {
      sessions[session_id].commands.push(newCommand);
    } else {
      sessions[session_id] = { commands: [newCommand] };
    }
  }

  function getSessionCommands(session_id) {
    const session = sessions[session_id];
    const commands = session && session.commands;

    return commands ? commands.join(", ") : [];
  }

  app.get("/api/commands-history", (req, res) => {
    const { session_id } = req.query;
    handleSessionCommands(session_id, "history");

    const sessionCommands = getSessionCommands(session_id);

    res.send({ express: `Previous commands: ${sessionCommands}` });
  });

  app.post("/api/command", (req, res) => {
    const { command, session_id } = req.body;

    handleSessionCommands(session_id, command);

    res.send({
      express: `This is what you sent me: ${command}.`,
    });
  });
};
