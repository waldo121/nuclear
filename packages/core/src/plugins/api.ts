/* eslint-disable @typescript-eslint/no-explicit-any */

// Nuclear plugin API, which defines the functionality exposed to plugins
import React from 'react';
import ReactDOM from 'react-dom';
import { app } from 'electron';


export default () => ({
  app,
  store: (window as any).store,
  React, ReactDOM
});
