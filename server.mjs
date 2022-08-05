import http from "http";
import { handler as ssrHandler } from "./dist/server/entry.mjs";
import nStatic from "node-static";

var fileServer = new nStatic.Server("./dist/client");
http
  .createServer(function (req, res) {
    ssrHandler(req, res, (err) => {
      if (err) {
        res.writeHead(500);
        res.end(err.toString());
      } else {
        // Serve your static assets here maybe?
        // 404?
        fileServer.serve(req, res);
      }
    });
  })
  .listen(3000);
